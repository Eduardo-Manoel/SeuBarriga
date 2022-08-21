/// <reference types="Cypress" />

describe('login', function() {
    it.only('successfully', () => {
      cy.login()
  
      cy.get('.qa-user-avatar').should('exist')
    })
  })