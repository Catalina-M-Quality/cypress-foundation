describe('Login', ()=>{
    it('TEST SUITE',()=>{
        // 1. Visitar la página
        //cy.visit('https://www.saucedemo.com/')
        // 2. Encontrar el campo de usuario por su ID (#) y colocarle un alias 'username'
        //cy.get('#user-name').as('username')

        // 3. utilizar el elemento por el alias 'username'
        //cy.get('@username').type('hello')

        // 4. utilizar elementos con sintaxis XPATH


       // cy.contains('div','Swag Labs').then(title => {
            // Vamos a poner un texto fijo para ver si el comando entra aquí
         //   cy.log('BUSCANDO CLASE...') 
         //   cy.log(title.attr('class'))
        //})
        

        // 3. Encontrar el campo de password por su ID (#) y escribir
        //cy.get('#password').type('secret_sauce')
        // 4. Hacer clic en el botón de Login por su ID (#)
        //cy.get('#login-button').click()
        //cy.get('.title').should('have.text', 'Products')

        //Find-Busca un hijo o descendiente del elemento donde estamos localizados
        //cy.get('.login_wrapper-inner').find('#user-name').should('exist')

        //METODO FIRST
        //cy.get('.form_input').first().type('standard_user')

        //METODO EQ
        //cy.get('.form_input').eq(1).type('secret_sauce')

        //METODO CLOSEST (LOCALIZAR EL ANCESTRO DE UN ELEMENTO QUE YA TENEMOS IDENTIFICADO)
        //cy.get('#user-name').closest('#login_button_container').then(parent=>{
          //  cy.log(parent.attr('class'));
            
        //})

        //METODO CLICK
        //cy.get('#login-button').click({force:true})

        //METODO TYPE, PERMITE DIGITAR INFORMACIÓN DENTRO DE UN INPUT
        //DIGITE UN TEXTO Y PRESIONE UN ENTER
        //cy.get('#user-name').type('hola')
        //cy.get('#user-name').type('{enter}')


         //METODO CHECK, SELECCIONAR RADIO BUTTONS O CHECK BOXES
         cy.visit('https://the-internet.herokuapp.com/checkboxes')
         cy.wait(50000)
         cy.get('input[type="checkbox"]').eq(0).check()
         cy.wait(50000)
         cy.get('input[type="checkbox"]').eq(0).uncheck()

    })
})