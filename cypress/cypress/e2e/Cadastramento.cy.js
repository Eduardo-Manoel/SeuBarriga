describe('Login', () => {
    it.only('successfully', () => {
      cy.Login()
      cy.contains('Seu Barriga')
        .should('exist')
    })
})