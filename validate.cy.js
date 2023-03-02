/// <reference types="cypress"/>

const cypress = require("cypress");

describe('Automation API test',()=>{
    it('Successfully validate status code',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });
    it('Successfully validate status code with params', ()=>{
        cy.request({
            method: "GET",
            url: 'https://reqres.in/api/users?page=2&per_pages=1&delay=3'
        }).as("users")
        cy.get('@users').its('status').should('equal', 200)
    });

    it('Successfully validate content', ()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', 200)
    });
    // it('Successfully validate negative response', ()=>{
    //     cy.request({
    //         method: "GET",
    //         url: 'https://pokeapi.co/api/v2/pokemon/eduwork'
    //     }).as('eduwork')
    //     cy.get('@users').its('status').should('equal', 200)
    // });
})
// expect(response.body.ability).to.eq(ability.name)