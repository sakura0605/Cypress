// ussing
// be.visible
// be.checked
// not.be.checked



describe('Test suite', function(){
    it('01. add to cart', function(){
        cy.visit('https://demo.nopcommerce.com'); // open website
        cy.url().should('include','nopcommerce'); // verify url
        cy.wait(2000);

        // Input Type
        cy.get("#small-searchterms").should('be.visible').type("Build your own computer");  // input to search field
        // cy.get("#small-searchterms").shoud('be.enabled') // (Dang loi cy.get(...).shoud is not a function)

        cy.get("[type='submit']").should('be.visible').click(); // click on Search button

        cy.get(".product-box-add-to-cart-button").should('be.visible').click(); // click on Add to Cart
        cy.title().should('eq','nopCommerce demo store. Build your own computer');

        cy.get("#product_enteredQuantity_1").clear().type("2"); //clear and input new value for number of products = 2 
        // cy.get("#product_enteredQuantity_1").invoke('attr', 'value').should('eq', "2");  // (Hien tren web van dang la value = 1 nen chay fail)

        // Radio button
        cy.get('#product_attribute_4_8').should('be.visible').should('be.checked'); // verify visible and checked
        cy.get("input[value='9']").should('be.visible').should('not.be.checked').click(); // verify un-checked and click on this 
        cy.get("input[value='9']").should('be.visible').should('be.checked'); // verify after checked
    })
})