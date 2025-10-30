describe('teste de filtro', () => {
  it('passes', () => {
    cy.visit('https://www.ebay.com/')
  cy.get('.gh-search-button__advanced-link').click()
cy.get('[data-testid="_nkw"]').type('cartas de pokemon japonesas')  
cy.get('.adv-form__actions > .btn').click()
cy.get('.s-page').contains('cartas de pokemon japonesa')
})
})