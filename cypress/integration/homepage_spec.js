/* global beforeEach, cy, describe, it */

describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the correct title', () => {
    cy
      .title()
      .should(
        'equal',
        'Dittly - When it comes to home‑improvement, do it together.'
      )
  })

  it('displays the login link', () => {
    cy.get('a:contains("Login")').should('be.visible')
  })
})
