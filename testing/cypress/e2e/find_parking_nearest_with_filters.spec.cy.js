/**
 * Test the use cases for find parking with user-defined filters.
 */
import { createAccount, deleteAccount } from '../support/firebase';

/**
 * Enter an address in the map, then browse the list of results.
 */
Cypress.Commands.add("queryMapThenBrowse", () => {
  cy.get('button:contains("Map")')
  .click()
  cy.location('pathname')
    .should('eq', '/map')
  cy.queryAddress()
  cy.get('button:contains("Browse")')
    .click()
  cy.location('pathname')
    .should('eq', '/browse')
})

  /**
   * Change the user lot type and price type settings.
   * Parameter:
   * lotType - The new value for the lot type setting.
   * priceType - The new value for the price type setting.
   */
  Cypress.Commands.add("updateSetting", (lotType, priceType) => {
    cy.get(':nth-child(2) > .nav-link').click()
    cy.location('pathname')
      .should('eq', '/account/profile')
    // Set lot type using drop-down selection.
    cy.get('.profile-settings > :nth-child(4)')
      .select(lotType)
    // Set price type using drop-down selection.
    cy.get('.profile-settings > :nth-child(6)')
      .select(priceType)
  })

before(() => {
  createAccount()
  cy.exec('python cypress/python/mocklot.py init mockpaidlot --free 0 --street 0')
  cy.exec('python cypress/python/mocklot.py init mockpaidst --free 0 --street 1')
  cy.exec('python cypress/python/mocklot.py init mockfreelot --free 1 --street 0')
  cy.exec('python cypress/python/mocklot.py init mockfreest --free 1 --street 1')
})

after(() => {
  deleteAccount()
  cy.exec('python cypress/python/mocklot.py delete mockpaidlot')
  cy.exec('python cypress/python/mocklot.py delete mockpaidst')
  cy.exec('python cypress/python/mocklot.py delete mockfreelot')
  cy.exec('python cypress/python/mocklot.py delete mockfreest')
})

/**
 * Test the use case to find parking lots or street parking exclusively.
 * Expected Result: The user can view parking lots or street parking exclusively.
 * Test Components:
 *   Firebase - Test read-write access to the Firebase 'account/' and 'parking/' document.
 *   Frontend - Test navigation within the following web app endpoints: root,'/account/login',
 *   '/account/info', 'account/profile', '/browse', '/map', and '/parkinglot/{key}'.
 */
describe('Lot Type Filter', () => {
  it('Logs in to the user, sets lot type to street, then finds only street parking.', () => {
    cy.userLogin()

    cy.updateSetting('Street Parking', 'All Parking')
    cy.queryMapThenBrowse()

    // Verify that only street parking exists.
    cy.contains('mockpaidlot').should('not.exist')
    cy.contains('mockpaidst')
    cy.contains('mockfreelot').should('not.exist')
    cy.contains('mockfreest')
  })

  it('Logs in to the user, sets lot type to lot, then finds only parking lots.', () => {
    cy.userLogin()

    cy.updateSetting('Lot or Garage', 'All Parking')
    cy.queryMapThenBrowse()

    // Verify that only lot parking exists.
    cy.contains('mockpaidlot')
    cy.contains('mockpaidst').should('not.exist')
    cy.contains('mockfreelot')
    cy.contains('mockfreest').should('not.exist')
  })
})

/**
 * Test the use case to find free parking spaces.
 * Expected Result: The user can view free parking spaces exclusively.
 * Test Components:
 *   Firebase - Test read-write access to the Firebase 'account/' and 'parking/' document.
 *   Frontend - Test navigation within the following web app endpoints: root,'/account/login',
 *   '/account/info', 'account/profile', '/browse', and '/map'.
 */
describe('Free Parking Filter', () => {
  it('Logs in to the user, sets price to free, then finds free parking.', () => {
    cy.userLogin()

    cy.updateSetting('All Parking', 'Only Free Parking')
    cy.queryMapThenBrowse()

    // Verify that only free parking exists.
    cy.contains('mockpaidlot').should('not.exist')
    cy.contains('mockpaidst').should('not.exist')
    cy.contains('mockfreelot')
    cy.contains('mockfreest') // This specific assert sometimes fail.
  })
})

/**
 * Test the composition of applied filters.
 * Expected Result: The user can view combine the free parking and street parking filters to view
 * free street parking or free parking lots.
 * Test Components:
 *   Firebase - Test read-write access to the Firebase 'account/' and 'parking/' document.
 *   Frontend - Test navigation within the following web app endpoints: root,'/account/login',
 *   '/account/info', 'account/profile', '/browse', and '/map'.
 */
describe('Composition of applied filters', () => {
  beforeEach(() => {
    cy.userLogin()
  })

  it('Logs in to the user, sets filters to free parking lots, and finds a free parking lot.', () => {
    cy.updateSetting('Lot or Garage', 'Only Free Parking')
    cy.queryMapThenBrowse()

    // Verify that only free parking lots exists.
    cy.contains('mockpaidlot').should('not.exist')
    cy.contains('mockpaidst').should('not.exist')
    cy.contains('mockfreelot')
    cy.contains('mockfreest').should('not.exist')
  })

  it('Logs in to the user, sets filters to free street parking, and finds free street parking.', () => {
    cy.updateSetting('Street Parking', 'Only Free Parking')
    cy.queryMapThenBrowse()

    // Verify that only free street parking exists.
    cy.contains('mockpaidlot').should('not.exist')
    cy.contains('mockpaidst').should('not.exist')
    cy.contains('mockfreelot').should('not.exist')
    cy.contains('mockfreest')
  })
})