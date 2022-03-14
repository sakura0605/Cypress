describe('Test suite', function(){
    it('01. Title', function(){
        cy.visit('https://docs.cypress.io/guides/getting-started/writing-your-first-test#Special-commands');
        cy.title().should('eq','Writing Your First Test | Cypress Documentation');
    })
})