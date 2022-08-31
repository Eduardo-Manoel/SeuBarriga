/// <reference types="Cypress" />

const faker = require('faker')
describe('create_conta', () => {
    beforeEach(() => cy.login_conta())

    it('successfully', () => {
        const conta = {
            name: `nome-${faker.random.words(1)}`
        }
      cy.create_conta (conta)
        cy.url().should('be.equal',`${Cypress.config('baseUrl')}salvarConta`)
        cy.contains(conta.nome).should('be.visible')


        //cy.get('#nome')
           // .type(faker.random.words(1))
        //cy.get('.btn')
          //  .click()
          //cy.url()
        //.should ('be.equal', `${Cypress.config('baseUrl')}${(Cypress.env('user_name'))}/${project.name}`)
        //cy.contains(project.name)
        //.should('be.visible')
        //cy.contains(project.description)
        //.should('be.visible')
    })
    })