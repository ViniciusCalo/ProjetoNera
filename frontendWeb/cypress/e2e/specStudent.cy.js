describe('Passo a Passo do login do aluno até a entrada do primeiro jogo', () => {
  it('passes', () => {
    //Abrindo a tela inicial
    cy.visit('http://localhost:3000/register')

    //Selecionando login como aluno
    cy.get('a').contains('Entrar').click()

    //Preenchendo os dados necessarios para login e realizando o login
    cy.get('input[placeholder="E-mail ou nome do usuário"]').type('lucas@email.com')
    cy.get('input[placeholder="Senha"]').type('1234')
    cy.get('button').contains('Entrar').click()

    //acessando o primeiro jogo no modulo de fração
    cy.get('a[href="/track"]').click()
    cy.get('a[href="/module"]').contains('Trilha de Fração').click()
    cy.get('img[alt="Modulo 1"]').click()
  })
})