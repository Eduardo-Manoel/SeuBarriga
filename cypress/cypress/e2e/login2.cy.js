describe('SEU BARRIGA', function () {
  beforeEach(function () {
    cy.visit('/')
  })
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
describe('Login', () => {
  it.only('successfully', () => {
    cy.Login()
    cy.contains('Seu Barriga')
      .should('exist')
  })
})