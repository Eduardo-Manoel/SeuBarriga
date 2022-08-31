/// <reference types="Cypress" />

const faker = require('faker')
describe('create_conta', () => {
  beforeEach(() => cy.login_conta())

  it('successfully', () => {
    const conta = {
      name: `${faker.random.words(1)}`
    }
    cy.create_conta(conta)
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}salvarConta`)
    cy.contains(conta.name).should('be.visible')
    cy.get('.alert').contains('Conta adicionada com sucesso!')
  })
  it('failure', () => {
    cy.get('#nome').clear().should('have.value', '')
    cy.get('.btn').click()
    cy.get('.alert').contains('Informe o nome da conta')
  })
})