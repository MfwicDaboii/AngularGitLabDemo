it('loads examples', () => {
  const baseURL: string = 'http://localhost:4200/'
  cy.visit(baseURL);
  cy.contains('Replace me with something relevant');
});
