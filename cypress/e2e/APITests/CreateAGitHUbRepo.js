/// <reference types="Cypress" />
//const dataJson = require('../../fixtures/createuser')
//const dataJson = require('../../fixtures/createuser.json')

describe('post - create repo request', () => {
 let accessToken = ''

    it('create user test', () => {
        
        cy.fixture('createrepo').then((payload) =>{
            
            cy.request({
                method: 'POST',
                url: 'https://api.github.com/user/repos',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name": "cypress_git_20221230_demo"
                }
   
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                
            })

        })
    })
})