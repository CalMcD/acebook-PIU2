describe('Sign in page', function() {
  it('can sign in after signing up', function() {
    cy.visit('/signup');
    cy.get('#firstname').type('John');
    cy.get('#second-name-input').type('Smith');
    cy.get('#email-entry').type('JohnS@gmail.com');
    cy.get('#password-entry').type('password1');
    cy.contains('Sign Up!').click();
    cy.get('.title').should('contain', 'Acebook');

    cy.get('#email-input').type('JohnS@gmail.com');
    cy.get('#password-input').type('password1');
    cy.contains('Log In').click();
    cy.get('.timeline-title').should('contain', 'Timeline');
  });
});
