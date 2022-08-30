const faker = require('faker')
describe('random.name', () => {
    beforeEach(() => cy.login_conta())

    it('successfully', () => {
        cy.get('#nome').type(faker.random.words(1))
    
        //const name = {
            //name: `nome-${faker.random.words(5)}`,

        })
    })