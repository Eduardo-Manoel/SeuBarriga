/// <reference types="Cypress" />

Cypress.Commands.add('login', function () {
  cy.visit('/login')
  cy.get("#email")
    .type(Cypress.env('user_name'))
  cy.get("#senha")
    .type(Cypress.env('user_password'))
  cy.get('.btn')
    .click()
})
Cypress.Commands.add('Login_Existente', function () {
  cy.visit('/login')
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

Cypress.Commands.add('login_conta', () => {
  cy.visit('/login')
  cy.get("#email")
    .type(Cypress.env('user_name'))
  cy.get("#senha")
    .type(Cypress.env('user_password'))
  cy.get('.btn')
    .click()
  cy.get('a:contains(Contas)')
    .click()
  cy.get('a:contains(Adicionar)')
    .click()
})