import { testEmail, testPassword } from './firebase';

/**
 * Input a default address, then visit the '/map' page.
 */
Cypress.Commands.add("queryAddress", () => {
  // Input address.
  cy.get('input.form-control.pac-target-input')
  .type('1800 N Broad St, Philadelphia, PA 19121, USA')
  cy.should('have.value', '1800 N Broad St, Philadelphia, PA 19121, USA')

  // Submit address and navigate to the map.
  cy.get('.mb-3 > .btn, .search-btn').click()
  cy.location('pathname')
    .should('eq', '/map')
})

/**
 * Input test user account details, then visit the 'account/info' page.
 */
Cypress.Commands.add("userLogin", () => {
  cy.visit('https://tutrafficdatabase.web.app')
  // Navigate to login page.
  cy.get('button:contains("Login")')
      .click()
  cy.location('pathname')
    .should('eq', '/account/login')
  // Input account details.
  cy.get('#email')
    .type(testEmail)
  cy.should('have.value', testEmail)
  cy.get('#password')
    .type(testPassword)
  cy.should('have.value', testPassword)
  
  // Sign in to account.
  cy.get('.login-btn > .btn').click()

  // Verify login landing page.
  cy.location('pathname')
  .should('eq', '/account/info')
});