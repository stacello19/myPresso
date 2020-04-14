describe('My First Test', function() {
    it('Finds an element', function() {
        cy.visit('https://example.cypress.io')

        cy.pause()
        
        cy.contains('type').click()

        cy.url()
          .should('include', '/commands/actions')
    })
})