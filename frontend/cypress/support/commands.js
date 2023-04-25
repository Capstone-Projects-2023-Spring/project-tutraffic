import { testEmail, testPassword } from './firebase';

/**
 * Input a default address, then visit the '/browse' page.
 */
Cypress.Commands.add("visitBrowse", () => {
  // Input address.
  cy.get('input.form-control.pac-target-input')
  .type('1800 N Broad St, Philadelphia, PA 19121, USA')
  cy.should('have.value', '1800 N Broad St, Philadelphia, PA 19121, USA')

  // Submit address and navigate to the map.
  cy.get('button:contains("Search")').click()
  cy.location('pathname')
    .should('eq', '/map')

  // Navigate to the list of parking lots.
  cy.get('button:contains("Browse")').click()
  cy.location('pathname')
    .should('eq', '/browse')
})

/**
 * Login to the test user account.
 */
Cypress.Commands.add("userLogin", () => {
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