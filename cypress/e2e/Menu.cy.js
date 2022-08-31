//SEUBARRIGA

describe('SEU BARRIGA', function () {
    beforeEach(function () {
        cy.visit('/login')
    })
    it('COMEÇO- Verifica o título da aplicação', function () {
        cy.title()
            .should('be.equal', 'Seu Barriga - Log in')
    })
    it('Verifica o Titulo de baixo', function () {
        cy.get('a:contains(Seu Barriga)')
            .should('be.visible')
            .click()
    })
    it('Fazer login', function () {
        cy.Login()
    })
    it.only('Verifica Título do login ', function () {
        cy.LoginSeuMadruga()
        cy.get('a:contains(Seu Barriga)')
            .should('be.visible')
        cy.get('a:contains(Home)')
            .should('be.visible')
        cy.get('a:contains(Contas)')
            .should('be.visible')
        cy.get('a:contains(Criar Movimentação)')
            .should('be.visible')
        cy.get('a:contains(Resumo Mensal)')
            .should('be.visible')
        cy.get('a:contains(Sair)')
            .should('be.visible')
        cy.get('table:contains(Conta)')
            .should('be.visible')
        cy.get('table:contains(Saldo)')
            .should('be.visible')
        cy.get('footer:contains(Seu Barriga. Nunca mais esqueça de pagar o aluguel.)')
            .should('be.visible')
    })
})
