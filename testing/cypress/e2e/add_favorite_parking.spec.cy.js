/**
 * Test the use case to add a favorite parking space.
 * Expected Result: The user can view a favorited parking lot in their favorites page.
 * Test Components:
 *   Firebase - Test read-write access to the Firebase 'account/' and 'parking/' document.
 *   Frontend - Test navigation within the following web app endpoints: root,'/account/login',
 *   '/browse', '/favorite', and '/parkinglot/{key}'.
 */
import { createAccount, deleteAccount } from '../support/firebase';

/**
 * Navigate to the favorites page then view the details of a favorite parking lot.
 */
Cypress.Commands.add('viewFavorite', () => {
  cy.get('button:contains("Favorites")')
    .click()
  cy.location('pathname')
    .should('eq', '/favorite')
  cy.get('button:contains("View Detail")')
    .click()
})

before(() => {
  createAccount()
  cy.exec('python cypress/python/mocklot.py init mocklot')
})

beforeEach(() => {
  cy.userLogin()
  cy.visit('https://tutrafficdatabase.web.app/browse')
})

after(() => {
  deleteAccount()
  cy.exec('python cypress/python/mocklot.py delete mocklot')
})

it('Logs in to the test user, adds a favorite parking spot, then views it.', () => {
  cy.get('button:contains("Add to Favorite")').first()
    .click()
  cy.get('button:contains("View Detail")').first()
    .click()

  cy.location('pathname')
    .then((pathname) => {
      // Verify that the pathnames match.
      cy.viewFavorite()
      cy.location('pathname')
        .should('eq', pathname)

      // Create a new session with the same user.
      cy.session('favorite', () => {
        cy.userLogin()
  
        // Verify that the pathnames match.
        cy.viewFavorite()
        cy.location('pathname')
        .should('eq', pathname)
      })
    })
})

