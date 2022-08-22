/// <reference types="Cypress" />

describe('Login', function () {
  it.only('successfully', () => {
    cy.Login()
    cy.get('.qa-user-avatar').should('exist')
  })
})