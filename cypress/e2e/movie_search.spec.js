// movie_search.spec.js

describe('Movie Search', () => {
  it('searches for a movie', () => {
    // Visit the application's URL (assuming your app is running locally).
    cy.visit('http://localhost:3000'); // Make sure to adjust the URL.

    // Type into the search input.
    cy.get('input[placeholder="Search for a movie..."]').type('Inception');

    // Click the search button.
    cy.get('button').contains('Search').click();

    // Assert that the search results are displayed.
    cy.get('ul').should('be.visible');
  });
});
