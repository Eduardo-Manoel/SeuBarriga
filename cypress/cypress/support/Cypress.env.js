/// <reference types="Cypress" />

Cypress.Commands.add('Cypress.env', function (){
    cy.get("#email").type('root')
    cy.get("#senha").Cypress.env('19202122')
    //"gitlab_access_token": "_NyV7MWBrHciGDHvcrMy"
    
})
