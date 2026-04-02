describe('Main Flow E2E', ()=>{
    it('Login with standard user credentials',()=>{
        // 1. Visitar la página
        cy.visit('https://www.saucedemo.com/')
        // 2. Encontrar el campo de usuario por su ID (#) y escribir
        cy.get('#user-name').type('standard_user')
        // 3. Encontrar el campo de password por su ID (#) y escribir
        cy.get('#password').type('secret_sauce')
        // 4. Hacer clic en el botón de Login por su ID (#)
        cy.get('#login-button').click()
        // 5. Despues de hacer click en el botón que abra y valide la pagina de productos
        cy.get('.title').should('have.text', 'Products')
        // 6. Agregar 2 productos al carrito
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        //7. Entrar al carrito
        cy.get('.shopping_cart_link').click()
        // 8.Validar el primer producto (Mochila) por nombre y precio
        cy.get('.inventory_item_name').eq(0).should('have.text', 'Sauce Labs Backpack')
        cy.get('.inventory_item_price').eq(0).should('have.text', '$29.99')

        // 8.Validar el segundo producto (Linterna) por nombre y precio
        cy.get('.inventory_item_name').eq(1).should('have.text', 'Sauce Labs Bike Light')
        cy.get('.inventory_item_price').eq(1).should('have.text', '$9.99')
        //9. hacer click en checkout
        cy.get('#checkout').click()
        //10. Formulario de envío
         cy.get('#first-name').type('Catalina')
         cy.get('#last-name').type('Mossos Castro')
         cy.get('#postal-code').type('1235')
         cy.get('#continue').click()
         cy.get('#finish').click()
          //11. llegar a la pantalla Thank you for your order!
         cy.get('.complete-header').should('contain', 'Thank you for your order!')
         //12. mensaje de exito!
         cy.get('.complete-text').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })
})