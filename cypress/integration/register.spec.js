/// <reference types="Cypress" />

describe('Register test', () => {

    beforeEach(() => {
        cy.visit('/register')
    })

    it('Page register', () => {
        cy.contains('Registrarse es sencillo!')
    })
})

describe('Send registration form', () => {

    beforeEach(() => {
      cy.visit('/register')
    })
  
    it('Send form', () => {
        
        cy.get('input[id="user-register_full_name"]').click({force: true}).type('Pedro')
        cy.get('input[id="user-register_email"]').click({force: true}).type('pedro@gmail.com')
        cy.get('input[id="user-register_address"]').click({force: true}).type('Calle 30b #85c-220')
        cy.get('input[id="user-register_password"]').click({force: true}).type('mylittle2010')
        cy.get('input[id="user-register_confirm_password"]').click({force: true}).type('mylittle2010')
        cy.confirmCaptcha();
        cy.wait(2000);
        cy.get('button[type="submit"]').click({force: true})
        cy.get('.error-message').should('be.visible');
    })

    it('request to enter data', () => {
        cy.get('button[type="submit"]').click({force: true});
        cy.contains('Porfavor, coloque su nombre!').should('be.visible');
        cy.contains('Porfavor, coloque su email!').should('be.visible');
        cy.contains('Porfavor, coloque su dirección!').should('be.visible');
        cy.contains('Porfavor, ingrese su contraseña!').should('be.visible');
        cy.contains('Porfavor, confirme su contraseña!').should('be.visible');
        cy.contains('Porfavor validar el captcha!').should('be.visible');
    });
  
  })