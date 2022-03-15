/// <reference types="cypress" />

const user = "";
const pass = "";


describe('Login', () => {

    before(() => {
        cy.visit('https://febos.cl')
      })

    
    it('Login into account in Proovedores', () => {
        //set timeout to 15 seconds
        Cypress.config('defaultCommandTimeout', 15000);
        //wait 2 secs      
        cy.wait(2000)
        //click on button
        cy.contains('Ingresar').click()
        //click on button for change environment
        cy.get('[id=desarrollo]').click()
        //click on the image of 'Portal de Proveedores'
        cy.contains('Portal de Proveedores').click()
        //wait 3.5 secs
        cy.wait(3500)
        //fill the login form
        cy.get('[id=login_username]').type(user);
        cy.get('[id=login_password]').type(pass);
        //Click in Entrar
        cy.contains('Entrar').click()
        //wait 15 secs
        cy.wait(15000)
        //Compare title of the current page with the expected
        cy.title().should('eq', 'Febos :: Selecciona tu empresa')
    });
    
});