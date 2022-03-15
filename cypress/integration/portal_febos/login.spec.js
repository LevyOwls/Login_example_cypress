/// <reference types="cypress" />

const user = "";
const pass = "";


describe('Login', () => {

    before(() => {
        cy.visit('https://febos.cl')
      })

    
    it('Login into account in Proovedores', () => {
        //set timeout to 15 seconds
        Cypress.config('defaultCommandTimeout', 20000); 
        //click on button
        cy.contains('Ingresar').click()
        //click on button for change environment
        cy.get('[id=desarrollo]').click()
        //click on the image of 'Portal de Proveedores'
        cy.contains('Portal de Proveedores').click()

        //fill the login form
        cy.get('[id=login_username]').type(user);
        cy.get('[id=login_password]').type(pass);
        //Click in Entrar
        cy.contains('Entrar').click()
        //Compare title of the current page with the expected
        cy.title({timeout: 15000}).should('eq', 'Febos :: Selecciona tu empresa')
    });
    
});
