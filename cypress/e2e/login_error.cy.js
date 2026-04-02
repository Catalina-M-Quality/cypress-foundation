describe('Pruebas de Inicio de Sesión - Casos Negativos', () => {
  
  it('Debe mostrar un mensaje de error al intentar ingresar con un usuario bloqueado', () => {
    // 1. Visitar la página de SauceDemo
    cy.visit('https://www.saucedemo.com/')

    // 2. Ingresar el usuario bloqueado
    // Pista: Usa el selector [data-test="username"]
    cy.get('[data-test="username"]').type('locked_out_user')

    // 3. Ingresar la contraseña
    // Pista: Usa el selector [data-test="password"]
    cy.get('[data-test="password"]').type('secret_sauce')

    // 4. Hacer clic en el botón de Login
    cy.get('[data-test="login-button"]').click()

    // 5. LA VERIFICACIÓN (Assertion): 
    // Aquí es donde aseguramos que el mensaje de error "Epic sadface" sea visible
    cy.get('[data-test="error"]').should('be.visible')
    
    // Opcional: Verificar que el texto sea el correcto
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })

})