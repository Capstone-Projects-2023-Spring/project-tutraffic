/**
 * Test the use case to search for the nearest parking spot.
 * Expected Result: The web-app makes a Google Maps search request to the destination.
 * Test Components:
 *   Firebase - Test read-write access to the Firebase 'parking/' document.
 *   Frontend - Test navigation within the following web app endpoints: root,'/map','/browse',
 *	 and '/parkinglot/{key}'.
 */

before(() => {
  // Create the mock lot.
  cy.exec('python cypress/python/mocklot.py init mocklot')
})

after(() => {
  // Delete the mock lot.
  cy.exec('python cypress/python/mocklot.py delete mocklot')
})

it('Searches Google Maps for a parking lot.', () => {
  cy.visit('https://tutrafficdatabase.web.app/')
  cy.queryAddress()
  cy.get('button:contains("Browse")').click()
  cy.location('pathname')
    .should('eq', '/browse')

  // Navigate to the first parking lot item, which should be the nearest item.
  cy.get('button:contains("View Detail")').first()
    .click()

  cy.location('pathname')
    .should('eq', '/parkinglot/mocklot')
  cy.get('button:contains("Park Here")')
    .click()

  // Stub the navigate button.
  cy.window()
    .then((win) => cy.stub(win, 'open').as('open'))

  cy.get('button:contains("Navigate")')
    .click()

  // Verify the navigation redirect url.
  cy.get('@open')
    .should('have.been.calledWith', 'https://www.google.com/maps/search/?api=1&query=39.9813333,-75.1580556', '_blank')
})