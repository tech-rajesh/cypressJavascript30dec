

/// <reference types="cypress"/>

import Login from "../pages/LoginPage"


describe('Alert Example ', function () {


    before(()=>{

        cy.fixture('login').then( function (logindetails) {

            this.logindetails = logindetails;

        })

    })


    it.skip('valid user credentails Example ', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //access data from fixture 
        cy.get('input[name="username"]').type(this.logindetails.hrm_login)

        cy.get('input[name="password"]').type(this.logindetails.hrm_password)
       
        cy.get('button[type="submit"]').click()
        

        //validate ----- login applicationurl - dashboard

        cy.url().should('include', 'dashboard')

    })


    it('valid user credentails Example - POM ', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')



        const lp = new Login();

        //access data from fixture 
        lp.enterUserName(this.logindetails.hrm_login)
        lp.enterpass(this.logindetails.hrm_password)
        lp.clickLoginButton()
        
        //validate ----- login applicationurl - dashboard

        cy.url().should('include', 'dashboard')

    })



})