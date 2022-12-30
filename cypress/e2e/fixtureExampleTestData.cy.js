/// <reference types="cypress"/>


describe('fixture Test', ()=>{


    before(function(){

        cy.fixture('login').then(function(logintestdata){


            this.logintestdata = logintestdata

        })

    })



    it('testdata test case 1', function(){


        cy.visit('https://www.amazon.in/')

        cy.get('#twotabsearchtextbox').type(this.logintestdata.searchItem)



    })
})