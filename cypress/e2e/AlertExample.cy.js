/// <reference types="cypress"/>



describe('Alert Example ', function () {


    it('Alert Example - Simple Alert ', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //generate an alert --- click on 
        cy.get('button[onclick="jsAlert()"]').click()

       
        //automatically handle by cypress ---- perform click operation on Ok button


        //validation step
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })


    it('Alert Example - Simple Alert -validate alert Text', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //generate an alert --- click on 
        cy.get('button[onclick="jsAlert()"]').click()

       
        //get the text from alert

        cy.on('window:alert', ( alert) => {

            expect(alert).to.contains('I am a JS Alert')

        })

        //validation step
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    it('Alert Example - Simple Alert -validate alert Text  --newly added', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //generate an alert --- click on 
        cy.get('button[onclick="jsAlert()"]').click()

       
        //get the text from alert

        cy.on('window:alert', ( alert) => {

            expect(alert).to.contains('I am a JS Alert')

        })

        //validation step
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    it('ALert Example - confirm Alert - cancel button', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //generate an alert --- click on 
        cy.get('button[onclick="jsConfirm()"]').click()

       
        //get the text from alert

        cy.on('window:confirm', ( alert) => {

            expect(alert).to.contains('I am a JS Confirm')

        })


        //cypress closes alert window using cancel button
        cy.on('window:confirm', ()=> false)   //click on cancel button

        //validation step
        cy.get('#result').should('have.text', 'You clicked: Cancel')



    })

    
    it('Alert Example - prompt - enter value', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //generate an alert --- click on 
        //enter the value into prompt alert
        
        

        cy.window().then(  (win) => {

            cy.stub(win, 'prompt').returns('Bhushan')   


        })


        //cy.handlePrompt();


        cy.get('button[onclick="jsConfirm()"]').click()

        //handle automatically 

        //validation step
        cy.get('#result').should('have.text', 'You clicked: Ok')




        cy.get('button[onclick="jsPrompt()"]').click()


        //validate alert text
        cy.on('window:prompt', ( alert) => {

            
            expect(alert).to.contains('I am a JS prompt')

        })


        //cypress closes alert window using cancel button
        //cy.on('window:prompt', ()=> false)   //click on cancel button

        //validation step
        cy.get('#result').should('have.text', 'You entered: Bhushan')



    })

    it('Alert  Example - Authenticated ', function () {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', { auth: {

                                                                            username : "admin",
                                                                            password: "admin"

                                                                            }})



        //validation step
        cy.get('.example > p').should('have.contain', 'Congratulations')
        
        

        
    })

    it('Alert  Example - Authenticated ---- failed for report', function () {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', { auth: {

                                                                            username : "admin",
                                                                            password: "admin"

                                                                            }})



        //validation step
        cy.get('.example > p').should('have.contain', 'Congratulations11')
        
        

        
    })

    it.only('Alert  Example - Authenticated URL ---- failed for report', function () {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')



        //validation step
        cy.get('.example > p').should('have.contain', 'Congratulations')
        
        

        
    })


})