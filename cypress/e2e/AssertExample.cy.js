
/// <reference types="cypress"/>

describe('HRM login', ()=>{


    it.skip('implict Assert   --- Should and ', ()=>{

        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //validate application url

        // cy.url().should('include','orangehrmlive')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrm')
        // cy.url().should('not.contain', 'google')  //negative test 



        // cy.url().should('include','orangehrmlive')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrm')
        // .should('not.contain', 'google')  //negative test 



        cy.url().should('include','orangehrmlive')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'google')  //negative test 



        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        
        //validate application logo visible/present

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')    ///logo present and visible



        //validate value into username field - admin
        cy.get('[name=username]').clear().type('Admin').should('have.value', 'Admin')
        
        //get the text

       // cy.get('[name=username]').should('')

    })



    it('Explicit Assert   --- Should and ', ()=>{

        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click();

        //validate application url

        let expUser = "Paul Collings";

        cy.get('.oxd-userdropdown-name').then(   (ele) => {


            let loggedInUserName = ele.text()
            //BDD
            expect(loggedInUserName).to.equal(expUser)
            expect(loggedInUserName).to.not.equal("expUser")

            //TDD
            assert.equal(loggedInUserName, expUser)

        })




        // //BDD
        // expect(true).to.equal(true)
        // expect(true).to.not.equal(true)

        // //TDD
        // assert.equal(true, true)
        // assert.notEqual(true, true)

    })



})