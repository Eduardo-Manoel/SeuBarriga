/// <reference types="Cypress" />

const faker = require('faker')
describe('create_conta', () => {
  beforeEach(() => cy.login_conta())

  it.only('successfully', () => {
    const conta = {
      name: `${faker.name.firstName()}`
      
    }
    cy.create_conta(conta)
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}salvarConta`)
    cy.contains(conta.name).should('be.visible')
    cy.get('.alert').contains('Conta adicionada com sucesso!')
    cy.get('#tabelaContas').contains('Conta')
    cy.get('#tabelaContas').contains('Ações')
     cy.get('#tabelaContas').contains(conta.name).siblings().children()
    // cy.get('[href="/removerConta?"] > .glyphicon').contains(conta.name)
    
    //.contains('.glyphicon-remove-circle span')
    //<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
  })
  it('failure', () => {
    cy.get('#nome').clear().should('have.value', '')
    cy.get('.btn').click()
    cy.get('.alert').contains('Informe o nome da conta')
  })
})