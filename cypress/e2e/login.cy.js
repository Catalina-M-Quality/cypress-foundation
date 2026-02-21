describe('Login', ()=>{
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

    })
})