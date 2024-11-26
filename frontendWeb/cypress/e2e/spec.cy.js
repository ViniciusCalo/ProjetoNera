describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/cadastro')
    cy.get('a').contains('Entrar').click()
    cy.get('input[placeholder="E-mail ou nome do usuário"]').type('lucas@email.com')
    cy.get('input[placeholder="Senha"]').type('1234')
    cy.get('button').contains('Entrar').click()
  })
})