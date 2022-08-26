/// <reference types="Cypress" />

Cypress.Commands.add('Login', function () {
  cy.visit('/')
  cy.get("#email")
    .type(Cypress.env('user_name'))
  cy.get("#senha")
    .type(Cypress.env('user_password'))
  cy.get('.btn')
    .click()
})
Cypress.Commands.add('Login_Existente', function () {
  cy.visit('/')
  cy.get("#email")
    .type(Cypress.env('user_name'))
  cy.get("#senha")
    .type(Cypress.env('user_password'))
  cy.get('.btn')
    .click()
})
Cypress.Commands.add('Logout', () => {
  cy.contains('Sair')
})