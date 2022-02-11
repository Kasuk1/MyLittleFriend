
describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('/login');
    })

    it('logs in user successfully when correct data is provided', () => {
        cy.get('#login-form_email').type('igor2018_21@hotmail.com');
        cy.get('#login-form_password').type('12345678');
        cy.confirmCaptcha();
        cy.wait(2000);
        cy.get('button').click();
        cy.location('pathname').should('eq', '/');
    });

    it('logs in user with error message when it does not exist', () => {
        cy.get('#login-form_email').type('test@user.com');
        cy.get('#login-form_password').type('wongpassword');

        cy.confirmCaptcha();
        cy.wait(2000);

        cy.get('button').click();

        cy.get('.error-message').should('be.visible');
    });

    it('shows an error message field when data is not provided', () => {
        cy.get('button').click();
        cy.contains('Porfavor, ingrese su email!').should('be.visible');
        cy.contains('Porfavor, ingrese su contraseña!').should('be.visible');
        cy.contains('Porfavor validar el captcha!').should('be.visible');
    });
})
