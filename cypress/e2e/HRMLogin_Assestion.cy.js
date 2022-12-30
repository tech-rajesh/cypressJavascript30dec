

describe('HRM login', ()=>{


    it('Implicit   --- Should and ', ()=>{

        
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




})