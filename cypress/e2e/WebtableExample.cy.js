/// <reference types="cypress"/>



describe('WebTable Example ', function () {


    it.skip('WebTable Test ', function () {
        cy.visit('https://the-internet.herokuapp.com/tables')

        //first
        //cy.get('table#table1').find('tbody > tr').first().find('td').find('a').first().click();



        cy.get('table#table1').find('tbody > tr').should('have.length', 4)

        //last
        cy.get('table#table1').find('tbody > tr').last().find('td').find('a').first().click();


        //validation step
        cy.url().should('include', '#edit')

    })



    it('WebTable Test - using each ', function () {
        cy.visit('https://the-internet.herokuapp.com/tables')

        //first
        //cy.get('table#table1').find('tbody > tr').first().find('td').find('a').first().click();



        cy.get('table#table1').find('tbody > tr').should('have.length', 4)  //no of rows

        cy.get('table#table1').find('head > tr >th').should('have.length', 6) //no of columns


        //last
        //cy.get('table#table1').find('tbody > tr').last().find('td').find('a').first().click();


        cy.get('table#table1').find('tbody > tr').find('td').each((ele, index, list) => {


            cy.log(`element text: ${index} :    ${ele.text()}`)

            let actualText = ele.text()
            let expectedText = "smith"

            if(expectedText==expectedText ){

                cy.log("match found ......")
            }

            


        })





        //validation step
        //cy.url().should('include', '#edit')

    })


    it.skip('WebTable Test2 ', function () {
        cy.visit('https://the-internet.herokuapp.com/tables')

        //first
        //cy.get('table#table1').find('tbody > tr').first().find('td').find('a').first().click();



        //last
        cy.get('table#table1').find('tbody > tr').last().find('td').find('a').first().click();


        //validation step
        cy.url().should('include', '#edit')

    })

    

})