/// <reference types="Cypress" />

describe('Logout', () => {
    beforeEach(() => cy.Login())

    it('successfully', () => {
        cy.Logout()
        cy.get('a:contains(Sair)')
            .click()
        cy.url()
            .should('be.equal', 'https://seubarriga.wcaquino.me/logout')

    })
})
