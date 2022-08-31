/// <reference types="Cypress" />

Cypress.Commands.add('create_conta', conta => {
         cy.visit('/addConta')
        cy.get('#nome').type('conta.nome')
        cy.get('.btn').click()
    })