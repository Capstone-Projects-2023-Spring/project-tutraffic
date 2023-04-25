import { testEmail, testPassword } from './firebase';

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