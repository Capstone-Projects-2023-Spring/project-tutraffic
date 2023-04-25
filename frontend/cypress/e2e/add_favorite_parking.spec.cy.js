/**
 * Test the use case to add a favorite parking space.
 * Test Components:
 *   Firebase - Test read-write access to the Firebase 'account/' document.
 *   Frontend - Test navigation within the following web app endpoints: root,'/account/login',
 *   '/account/register', and '/account/info'.
 */
import { createAccount, deleteAccount } from '../support/firebase';

before(() => {
  // Create the test account.
  createAccount()
  // Create the mock lot, gauranteeing at least one lot.
  cy.exec('python cypress/python/mocklot.py init')
})

after(() => {
  // Delete the test account.
  deleteAccount()
  // Delete the mock lot.
  cy.exec('python cypress/python/mocklot.py delete')
})

it('Logs in to the test user, then adds a favorite parking spot.', () => {
  cy.visit('https://tutrafficdatabase.web.app/')
  // Navigate to the login page.
  cy.get('button:contains("Login")').click()
  cy.location('pathname')
    .should('eq', '/account/login')

  cy.userLogin()

  // Navigate to the list of parking lots.
  cy.get('button:contains("Browse")').click()
  cy.location('pathname')
    .should('eq', '/browse')
  
  // Favorite the first parking lot item.
  cy.get('button:contains("Add to Favorite")').first().click()

  // Navigate to the item and get its pathname.
  cy.get('button:contains("View Detail")').first().click()
  cy.location('pathname')
    .then((pathname0) => {
      // Navigate to the list of favorites.
      cy.get('button:contains("Favorites")').click()
      cy.location('pathname')
        .should('eq', '/favorite')
      
      // View the favorite item.
      cy.get('button:contains("View Detail")').click()

      // Verify that the pathnames match.
      cy.location('pathname')
        .should('eq', pathname0)
    })
})

