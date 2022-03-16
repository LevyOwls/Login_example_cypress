/// <reference types="cypress" />

const user = "";
const pass = "";

describe('Login', () => {

    before(() => {
        //set timeout to 20 seconds
        Cypress.config('defaultCommandTimeout', 30000); 
        cy.visit('https://febos.cl')
      })

    
    it('Login into account in Proovedores', () => {
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
        cy.title({timeout: 30000}).should('eq', 'Febos :: Selecciona tu empresa')
    });

    it('Select company', () => {
        //Search company
        cy.contains('LUIS SEBASTIAN URRUTIA FUENTES',{timeout: 5000}).click()
        //Search company x2
        cy.contains('Nombre de fantasia: FEBOS S.A.',{timeout: 15000}).click()
       
    });

    it('Change password',() => {
        //Search perfil name
        cy.contains('Martin Toledo',{timeout: 30000}).click()
        //Click in perfil
        cy.contains('Perfil',{timeout: 15000}).click()
        //Click in Modificar contraseña
        cy.get('.md-btn.md-btn-danger.md-btn-block.md-btn-large',{timeout: 15000}).click()
        //Fill the form
        //expassword
        cy.get('[id=claveA]',{timeout: 15000}).type(pass)
        //newpassword
        cy.get('[id=claveB]',{timeout: 15000}).type(pass)
        //confirmpassword
        cy.get('[id=claveC]',{timeout: 15000}).type(pass)
        //Click in Actualizar Contraseña
        cy.get('.md-btn.md-btn-primary.md-btn-block.md-btn-large.ng-binding',{timeout: 30000}).click()
        //search the message of success
        cy.get('.heading_b.uk-text-success',{timeout: 15000}).should('exist')
        
    });
    
    it('change "cargo"', () => {
        cy.get('[name=cargo]').type('{selectAll}{backspace}')
        cy.get('[name=cargo]').type('Cargo nuevo')
        cy.get('.md-btn.md-btn-warning.md-btn-block.md-btn-large.ng-binding').click()
        cy.get('.heading_b.uk-text-success',{timeout: 15000}).should('exist')
    });
    
});
