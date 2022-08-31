/// <reference types="Cypress" />


Cypress.Commands.add('create_conta', conta  => {
    cy.visit('addConta')
    cy.get('#nome')
       .type(conta.name)
    cy.get('.btn')
       .click()
 })
 