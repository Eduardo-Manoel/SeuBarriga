/// <reference types="Cypress" />

describe('Logout', () => {
    beforeEach(() => cy.login())

    it('successfully', () => {
        cy.Logout()
        cy.get('a:contains(Sair)')
            .click()
        cy.screenshot()    
        cy.url()
            .should('be.equal', 'https://seubarriga.wcaquino.me/logout')

    })
})
