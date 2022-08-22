/// <reference types="Cypress" />

describe('Login', function () {
  it.only('successfully', () => {
    cy.Login()
    cy.get('.btn')
      .click()
    cy.contains('Seu Barriga')
      .should('exist')
  })
})