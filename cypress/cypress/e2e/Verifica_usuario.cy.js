//SEUBARRIGA

describe('SEU BARRIGA', function () {
    beforeEach(function () {
        cy.visit('/')
    })
    it('Usuario Existente', function () {
        cy.get('a:contains(Novo usuário?)')
            .should('be.visible')
            .click()
        cy.Login_Existente()
        cy.url()
        .should('eq', 'https://seubarriga.wcaquino.me/logar')
        
    })
})