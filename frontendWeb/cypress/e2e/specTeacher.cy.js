describe('Passo a Passo do login do professor até a criação da sala', () => {
    it('Fluxo Professor', () => {
      //Abrindo a tela inicial
      cy.visit('http://localhost:3000/cadastro')

      //Entrando na tela de login
      cy.get('a').contains('Entrar').click()

      //Selecionando login como professor
      cy.get('a').contains('Professor').click()

      //Preenchendo os dados necessarios para login e realizando o login
      cy.get('input[placeholder="E-mail ou nome do usuário"]').type('carla@email.com')
      cy.get('input[placeholder="Senha"]').type('1234')
      cy.get('input[placeholder="CPF"]').type('51005120838')
      cy.get('button').contains('Entrar').click()

      //Criando na tela de criar cadastro
      cy.get('a[href="/createClass"]').contains('Criar').click()

      //Preenchendo os dados necessarios para criar uma sala
      cy.get('input[placeholder="Digite o título da Sala"]').type('51005120838')
      cy.get('input[placeholder="Digite uma descrição da Sala"]').type('51005120838')
      cy.get('div').contains('Fração').click()
      cy.get('select').select('Módulo 1')

       //Cancelando a criação da sala para não persistir no banco
       cy.wait(2000)
       cy.get('button').contains('Cancelar').click()
    })
  })