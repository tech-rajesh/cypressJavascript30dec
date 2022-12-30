describe('hooks Example', ()=>{



    before(()=>{

        //launching the application

        cy.log('==========before hooks=========')
        


    })



    beforeEach(function(){

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.log('==========before each test =========')
    })



    afterEach(function(){

        
        cy.log('==========after each test case =========')
    })


    after(function(){

        cy.log('==========after hooks=========')
    })



    it('ALert Example - confirm Alert - cancel button', function () {
        //cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

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





})