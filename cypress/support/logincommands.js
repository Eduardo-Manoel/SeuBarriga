/// <reference types="Cypress" />

Cypress.Commands.add('login',function() {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get("#email").Cypress.env('user_name')
    cy.get("#senha").Cypress.env('user_password')
    cy.get(".btn").click()
  })