describe('Usabilidade tela inicial', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('verifica mensagens tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })
    
    it.only('verifica botao habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('Jaqueline');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    
})
