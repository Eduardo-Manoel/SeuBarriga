/// <reference types="Cypress" />

describe('Contas', () => {
    beforeEach(() => cy.login())

    it('Clica no Menu Contas e depois em adicionar', () => {
        cy.get('a:contains(Contas)')
            .click()
        cy.get('a:contains(Adicionar)')
            .click()
        cy.url()
            .should('be.equal', 'https://seubarriga.wcaquino.me/addConta')
    })
    it('Verifica o campo Nome', () => {
        cy.get('a:contains(Contas)')
            .click()
        cy.get('a:contains(Adicionar)')
            .click()
        cy.contains('label', 'Nome')
        cy.get('#nome')
            .clear()
            .type('Eduardo')
        cy.get('.btn')
            .click()
        cy.url()
            .should('be.equal', 'https://seubarriga.wcaquino.me/salvarConta')
    })
})
 
