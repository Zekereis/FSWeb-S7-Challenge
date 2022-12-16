describe("My First Test", () => {
    

    it("Siteyi ziyaret et", () => {
        cy.visit("http://localhost:3000/")
    })

    it('Finds an element', () => {

        cy.visit("http://localhost:3000/");
    
        cy.contains('Order');
      })
    
      it('Ordera tıkla', () => {

        cy.visit("http://localhost:3000/");
    
        cy.contains('Order').click();
      })
      it('Pizzana bir isim ver', () => {
        cy.visit('http://localhost:3000/')
    
        cy.contains('Order').click()
    
        
        cy.get('.action-email').type('Kopernik pizzası')
    
        
        cy.get('.action-email').should('have.value', 'Kopernik pizzası')

        
      })
      it('Pizzanın boyutunu seç', () => {
        cy.visit('http://localhost:3000/')
    
        cy.contains('Order').click()
    
        cy.get('#cy-drop').select('Medium Size').should('have.value','Medium Size')
        
      })
      it('Pizzanın sosunu seç', () => {
        cy.visit('http://localhost:3000/')
    
        cy.contains('Order').click()
    
        cy.get('[type=radio]').check('Alfredo Sauce')

      })
      it('Pizzana ekstra malzeme seç', () => {
        cy.visit('http://localhost:3000/')
    
        cy.contains('Order').click()
    
        cy.get('[type=checkbox]').check('malzeme1')

      })
      it('Pizzan için özel bir sipariş ver', () => {
        cy.visit('http://localhost:3000/')
    
        cy.contains('Order').click()
    
        
        cy.get('.cy-ozel').type('sıcak gelsin lütfen')
    
        
        cy.get('.cy-ozel').should('have.value', 'sıcak gelsin lütfen')
       
      })
      
})