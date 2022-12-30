

describe('Swag Lab Test', function () {
    //part of before hook
    before(function(){
       //access fixture data
       cy.fixture('login').then(function(regdata){
          this.regdata=regdata
       })
    })
    // test case
    it('Login Test Case1', function (){
       // launch URL
       cy.visit("https://www.saucedemo.com/")
       //data driven from fixture
       cy.get('#user-name')
       .type(this.regdata.username)
       cy.get('#password').type(this.regdata.validpassword)

       cy.get('#login-button').click();


    //    cy.get('body').click();
    //    cy.get('#logout_sidebar_link').click()

    });
 });