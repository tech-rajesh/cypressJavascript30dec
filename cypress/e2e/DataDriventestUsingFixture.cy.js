/// <reference types="cypress"/>



describe('Fixture Example ', function () {



    before(()=>{

        cy.fixture('login').then( function (logindetails) {

            this.logindetails = logindetails;

        })

    })


    it('valid user credentails Example ', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //access data from fixture 
        cy.get('input[name="username"]').type(this.logindetails.hrm_login)

        cy.get('input[name="password"]').type(this.logindetails.hrm_password)
       
        cy.get('button[type="submit"]').click()
        

        //validate ----- login applicationurl - dashboard

        cy.url().should('include', 'dashboard')

    })


    it.skip('valid user credentails Example - password blank ', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //access data from fixture 
        cy.get('input[name="username"]').type(this.logindetails.hrm_login)

        //cy.get('input[name="password"]').type(this.logindetails.hrm_password)
       
        cy.get('button[type="submit"]').click()
        


    })


})