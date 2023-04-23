/**
 * Test the feature to search for the nearest parking spot.
 * Expected Result: The client browser calls to open a Google Maps search in a new window,
 * targeting the mock parking lot as the destination.
 * Test Components:
 *   Firebase - Test read-write access to the Firebase 'parking/' document.
 *   Frontend - Test navigation within the following web app endpoints: root,'/map','/browse',
 *	 and '/parkinglot/{key}'
 */

beforeEach(() => {
  // Create the mock lot.
  // Add workaround to get traceback for debugging problem that only occurs in GitHub Action.
  // Source: https://github.com/cypress-io/cypress/issues/5470#issuecomment-569627930
    cy.exec('python cypress/python/mocklot.py init', { failOnNonZeroExit: false }).then(result => {
      if (result.code) {
        throw new Error(`Execution of "python cypress/python/mocklot.py init" failed
        Exit code: ${result.code}
        Stdout:\n${result.stdout}
        Stderr:\n${result.stderr}`);
      }
    })
})

afterEach(() => {
  // Delete the mock lot.
  // Add workaround to get traceback for debugging problem that only occurs in GitHub Action.
  // Source: https://github.com/cypress-io/cypress/issues/5470#issuecomment-569627930
  cy.exec('python cypress/python/mocklot.py delete', { failOnNonZeroExit: false }).then(result => {
    if (result.code) {
      throw new Error(`Execution of "python cypress/python/mocklot.py delete" failed
      Exit code: ${result.code}
      Stdout:\n${result.stdout}
      Stderr:\n${result.stderr}`);
    }
  })
})

it('Finds the navigation to Tuttleman Lot, the nearest parking lot by distance.', () => {
  cy.visit('https://tutrafficdatabase.web.app/')

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

  // Navigate to the first parking lot item, which should be the nearest item.
  cy.get('button:contains("View Detail")').first().click()

  // Verify the parking lot.
  cy.location('pathname')
    .should('eq', '/parkinglot/mocklot')

  // Navigate to the third-party navigation page.
  cy.get('button:contains("Park Here")').click()

  // Stub the navigate button, then click it.
  cy.window().then((win) => cy.stub(win, 'open').as('open'))
  cy.get('button:contains("Navigate")').click()

  // Verify the navigation redirect url.
  cy.get('@open').should('have.been.calledWith', 'https://www.google.com/maps/search/?api=1&query=39.9813333,-75.1580556', '_blank')
})