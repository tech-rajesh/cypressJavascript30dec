/// <reference types="Cypress" />
const dataJson = require('../../fixtures/example')
describe('api test cases',() => {
    var payload = ""
    let accesstoken= '42e375d0a5ad55ffd23fba30b7993238bfd9be4b25b74eb042fa647ee574e1f2'
    it.skip('get user', () => {        
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public-api/users/123/posts',
            headers: {
                'Authorization': 'Bearer '+accesstoken,
              }
        }).then((res)=>{
            
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination).has.property('limit',10)
            expect(res.body).has.to.deep.equal({
                "code": 200,
                "meta": {
                    "pagination": {
                        "total": 0,
                        "pages": 0,
                        "page": 1,
                        "limit": 10
                    }
                },
                "data": []
                })
        })
    })

    it('get user by id', () => {
        
        
        
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=2',
            
        }).then((APIresult)=>{
            
            
            expect(APIresult.status).to.eq(200)   //BDD
            assert(APIresult.status, '200')         //TDD
            //expect(APIresult.headers).to.contain('Content-Type')

            cy.log(APIresult)
            //cy.log(JSON.stringify(APIresult))
            
            
        })    
    })  




    it.skip('validation on API', ()=>{


        cy.request('https://reqres.in/api/users')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
        .and('include', 'utf-8')



    })




})