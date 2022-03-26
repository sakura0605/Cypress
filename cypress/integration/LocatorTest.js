//1. open website
//2. input to search field
//3. click on Search button
//4. click on Add to Cart
//5. clear and input new value for number of products = 2 
//6. click add to cart
//7. click on shopping cart
//8. verify quantity with value attribute = 2
//9. verify unit-text = $1,800.00
//10. verify total-text = $3,600.00


describe('Test suite', function(){
    it('01. add to cart', function(){
        cy.visit('https://demo.nopcommerce.com'); // open website

        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch'); // input to search field

        cy.get("[type='submit']").click(); // click on Search button
        cy.wait(2000);

        cy.get(".product-box-add-to-cart-button").click(); // click on Add to Cart

        cy.get("#product_enteredQuantity_4").clear().type("2"); //clear and input new value for number of products = 2 

        cy.get(".add-to-cart-button").click(); //click add to cart
        cy.wait(2000);

        cy.get("#topcartlink > a > span.cart-label").click(); //click on shopping cart
        cy.wait(2000);

        cy.get(".qty-input").invoke('attr', 'value').should('eq', "2"); // verify quantity with value attribute = 2
        cy.get(".product-unit-price").contains("$1,800.00"); // verify text = $1,800.00
        cy.get(".product-subtotal").contains("$3,600.00"); // verify text = $3,600.00
    })
})