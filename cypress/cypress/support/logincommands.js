/// <reference types="Cypress" />

Cypress.Commands.add('Login', function() {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get("#email").type(Cypress.env('user_name'))
    cy.get("#senha").type(Cypress.env('user_password'))
    
  })