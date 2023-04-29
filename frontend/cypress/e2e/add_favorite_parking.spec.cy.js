/**
 * Test the use case to add a favorite parking space.
 * Expected Result: The user can view a favorited parking lot in their favorites page.
 * Test Components:
 *   Firebase - Test read-write access to the Firebase 'account/' and 'parking/' document.
 *   Frontend - Test navigation within the following web app endpoints: root,'/account/login',
 *   '/browse', '/favorite', and '/parkinglot/{key}'.
 */
import { createAccount, deleteAccount } from '../support/firebase';

before(() => {
  createAccount()
  cy.exec('python cypress/python/mocklot.py init mocklot')
})

after(() => {
  deleteAccount()
  cy.exec('python cypress/python/mocklot.py delete mocklot')
})

it('Logs in to the test user, then adds a favorite parking spot.', () => {
  cy.visit('https://tutrafficdatabase.web.app/')

  cy.get('button:contains("Login")')
    .click()
  cy.location('pathname')
    .should('eq', '/account/login')
  cy.userLogin()
  cy.get('button:contains("Browse")')
    .click()
  cy.location('pathname')
    .should('eq', '/browse')

  cy.get('button:contains("Add to Favorite")').first()
    .click()
  cy.get('button:contains("View Detail")').first()
    .click()

  cy.location('pathname')
    .then((pathname) => {
      cy.get('button:contains("Favorites")')
        .click()
      cy.location('pathname')
        .should('eq', '/favorite')
      cy.get('button:contains("View Detail")')
        .click()
      // Verify that the pathnames match.
      cy.location('pathname')
        .should('eq', pathname)
    })
})

