describe('Cadastro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('verifica mensagem de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('jaqueline');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.wait(10000);
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    
    it('verifica mensagem de user name com menos de 2 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('1');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagem de full name com menos de 2 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('1');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica mensagem de full name com no maximo 40 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible');
    })

    it('verifica mensagem de user name com no maximo 30 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
    })

    it('verifica mensagem de user name com letra minuscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Aaa');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    
    /* it.only('realizar cadastro de novo usuario', ()=> {
        cy.cadastroNovoUsuario('testeee8@mail.com', 'Patricia Midoriii', 'baree7', '876543210');
       // cy.contains('button', 'Register').click(); - não funcionou
      // cy.contains('input[formcontrolname="userName"]').wait(1000).should('be.visible');; - não funcionou
      cy.contains('ap-vmessage', 'User name is required!').wait(1000).should('be.visible');
    }) */
    
    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.forEach(usuario => {
        it(`registra novo usuário ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    })
})
