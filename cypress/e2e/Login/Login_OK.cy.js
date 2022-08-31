describe('Login', () => {
    it.only('successfully', () => {
      cy.login()
      cy.contains('Seu Barriga')
        .should('exist')
    })
})