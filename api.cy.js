/// <reference types="cypress"/>

describe("Automation API with Pokemon API", () => {
    it("Successfully validate content-type", () => {
      cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon");
      cy.get("@pokemon")
        .its("headers")
        .its("content-type")
        .should("include", "application/json; charset=utf-8");
  
      // OR
  
      cy.request({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
        headers: {
          accept: "application/json; charset=utf-8",
        },
      }).as("pokemon");
  
      cy.get("@pokemon").then((response) => {
        expect(response.headers).to.have.property(
          "content-type",
          "application/json; charset=utf-8"
        );
      });
    });
  
    it("Successfully assertion respon body", () => {
      cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon");
      cy.get("@pokemon").then((response) => {
        expect(response.body).to.have.property("name");
        cy.log(JSON.stringify(response.body));
      });
    })
})