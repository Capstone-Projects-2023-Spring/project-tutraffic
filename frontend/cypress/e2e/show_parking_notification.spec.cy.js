/**
 * Test the use case for notifications at less than 5 parking spaces.
 * Expected Result: A notification is triggered when the permission and the
 * updated number of parking spaces is less than 5, otherwise the notification
 * is not triggered.
 * Test Components:
 *   Firebase - Test read-write access to the Firebase 'account/' document.
 *   Frontend - Test navigation within the following web app endpoints: root,
 *   '/account/login', '/browse', '/favorite', and '/parkinglot/{key}'.
 * References:
 * https://www.cypress.io/blog/2020/01/24/testing-the-browser-notification-api/
 * https://docs.cypress.io/api/cypress-api/catalog-of-events#Uncaught-Exceptions
 */

/**
 * Triggers browser notifications. It selects parking lot then changes the
 * number of parking spots several times.
 */
Cypress.Commands.add("triggerNotifications", () => {
  cy.queryAddress()
  cy.get('button:contains("Browse")').click()
  cy.location('pathname')
    .should('eq', '/browse')
  cy.get('button:contains("View Detail")').first()
    .click()
  cy.location('pathname')
    .should('eq', '/parkinglot/mocklot')
  cy.get('button:contains("Park Here")')
    .click()

  // Decrement spots from 4 to 0, then reset to 6.
  for (let i = 4; i >= 0; i--) {
    cy.exec('python cypress/python/mocklot.py put --name mocklot --spots ' + i)
  }
  cy.exec('python cypress/python/mocklot.py put --name mocklot --spots 6')
})

after(() => {
  // Delete the mock lot.
  cy.exec('python cypress/python/mocklot.py delete --name mocklot')
})

describe('Browser notifications', () => {

  beforeEach(() => {
    // Reset the mock lot.
    cy.exec('python cypress/python/mocklot.py init --name mocklot --spots 4')
  })

  it('Is supported by the test browser', () => {
    cy.visit('https://tutrafficdatabase.web.app/')
    cy.window().should('have.property', 'Notification').should('be.a', 'function')
  })

  it('Asks for permission.', () => {
    cy.visit('https://tutrafficdatabase.web.app/', {
      onBeforeLoad(win) {
        // Stub notifications.
        cy.stub(win.Notification, 'permission', 'default')
        cy.stub(win.Notification, 'requestPermission').as('ask')
        cy.stub(win, 'Notification').as('Notification')
      }
    })
    cy.queryAddress()
    cy.get('button:contains("Browse")').click()
    cy.location('pathname')
      .should('eq', '/browse')
    cy.get('button:contains("View Detail")').first()
      .click()
    cy.location('pathname')
      .should('eq', '/parkinglot/mocklot')

    cy.get('button:contains("Park Here")')
      .click()
    // Verify that the Notification.requestPermission dialogue has been called.
    cy.get('@ask')
      .should('have.been.calledOnce')
  })


  it('Shows notifications when granted permission.', () => {
    // Catch expected exceptions related to displaying React notifications.
    cy.on('uncaught:exception', (err, _runnable) => {
      if (
        err.message.indexOf('f.close is undefined') >= 0
        || err.message.indexOf('Cannot read properties of undefined (reading \'bind\')') >= 0
      ) {
        return false
      }
      else {
        return true
      }
    })

    cy.visit('https://tutrafficdatabase.web.app/', {
      onBeforeLoad(win) {
        cy.stub(win.Notification, 'permission', 'granted')
        cy.stub(win, 'Notification').as('Notification')
      }
    })
    cy.triggerNotifications()

    // Verify the number of notifications.
    cy.get('@Notification')
      .should('have.callCount', 5)
  })

  it('Does not show notifications when denied permission.', () => {
    cy.visit('https://tutrafficdatabase.web.app/', {
      onBeforeLoad(win) {
        // Stub notifications.
        cy.stub(win.Notification, 'permission', 'denied')
        cy.stub(win, 'Notification').as('Notification')
      }
    })
    cy.triggerNotifications()

    // Verify the number of notifications.
    cy.get('@Notification')
      .should('not.have.been.called')
  })
})
