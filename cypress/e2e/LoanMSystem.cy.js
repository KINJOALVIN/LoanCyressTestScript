describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
  })

  it('should allow user to login with valid credentials', () => {
    // Fill in the username/email and password fields
    cy.visit('http://localhost:3000/login')
    cy.get('#username').type('admin');
    cy.get('#password').type('Makori91');

    // Submit the form
    cy.get('.bg-red-500').click();
    cy.wait(7000);

    //checking UI Elements are scrollable on dashboard
    cy.get('.px-8 > :nth-child(3)').scrollIntoView();

    //Naviagting through the menu links
    //Home page
    cy.get('ul > .cursor-pointer').click();

    //Client page
    cy.get('ul > :nth-child(2)').click();

    //adding a new client
    cy.get('.border-y-2 > .border').click();
    cy.get('[name="firstname"]').type('alvin');
    cy.get('[name="lastname"]').type('makor');
    cy.get('[type="number"]').type('0709647443');
    cy.get('[name="address"]').type('6575');
    cy.get('[type="email"]').type('alvmakori@yahoo.com')
    cy.get('[name="username"]').type('alvmakori')
    cy.get('[type="submit"]').click();

    //update a client
    cy.get(':nth-child(5) > .bg-red-500').click();
    cy.get('[name="firstname"]').type('Alvin');
    cy.get('[name="lastname"]').type('makori');
    cy.get('[type="email"]').type('alvinahmakori@gmail.com')

  //save changes
    cy.get('[type="submit"]').click();

    //adding a loan to the client
    cy.get(':nth-child(1) > .items-center > .bg-red-500').click();
    cy.get(':nth-child(1) > .items-center > .bg-red-500').click();
    cy.get('.select2-results__option').contains('Personal Loan').click();
    cy.get(':nth-child(3) > .block').type('5000');
    cy.get(':nth-child(4) > .block').type('5000');
    cy.get(':nth-child(5) > .block').type('2000');
    cy.get('#terms').click();
    cy.get('.select2-results__option').contains('1 Month').click();
    cy.get(':nth-child(7) > .block').type('8/21/2024');
    cy.get(':nth-child(8) > .block').type('9/21/2024');
    cy.get('.w-auto').click();

    //deleting a client
    cy.get(':nth-child(11) > :nth-child(1)').scrollIntoView();
    cy.get(':nth-child(11) > :nth-child(6) > .mb-2').click();
    cy.wait(3000);
    cy.get('.Deleted successfully!') 
      .should('be.visible') 
      .and('contain.text', 'Deleted successfully!');

    //Loans page
    cy.get('ul > :nth-child(3)').click();
    cy.get('.h-\[650px\]').scrollIntoView();

    //Adding a new loan
    cy.get('.border-y-2 > .bg-red-500').click();
    cy.get('#type').click();
    cy.get('.select2-results__option').contains('Personal Loan').click();
    cy.get('#status').click();
    cy.get('.select2-results__option').contains('Pending').click();
    cy.get(':nth-child(4) > .block').type('5000');
    cy.get(':nth-child(5) > .block').type('5000');
    cy.get(':nth-child(6) > .block').type('2500');
    cy.get('#terms').click();
    cy.get('.select2-results__option').contains('1 Month').click();
    cy.get(':nth-child(7) > .block').type('8/21/2024');
    cy.get(':nth-child(8) > .block').type('9/21/2024');
    cy.get('.w-auto').click();

    //Editing a loan to disbursed status
    cy.get(':nth-child(10) > :nth-child(2)').click();
    cy.get('.h-\[530px\]').scrollIntoView();
    cy.get('#status').click();
    cy.get('.select2-results__option').contains('disbursed').click();
    cy.get('button.text-center').click();

    //Editing a loan to Fully paid status
    cy.get(':nth-child(10) > :nth-child(2)').click();
    cy.get('.h-\[530px\]').scrollIntoView();
    cy.get('#status').click();
    cy.get('.select2-results__option').contains('Fully Paid').click();
    cy.get('button.text-center').click();
     //Editing a loan to Decline status

    cy.get(':nth-child(10) > :nth-child(2)').click();
    cy.get('.h-\[530px\]').scrollIntoView();
    cy.get('#status').click();
    cy.get('.select2-results__option').contains('Decline').click();
    cy.get('button.text-center').click();

   // deleting an exisiting loan
    cy.get(':nth-child(10) > .mb-2').click();
    cy.wait(3000);
    cy.get('.Deleted successfully!') 
      .should('be.visible') 
      .and('contain.text', 'Deleted successfully!');

  // Payments page
  cy.get('ul > :nth-child(4)').click()
  cy.get('.flex.h-\[900px\] > .h-\[900px\]').scrollIntoView();

  //adding a new payment
  cy.get('.bg-red-500 > a').click();
  cy.get(':nth-child(14) > :nth-child(1)').scrollIntoView();
  cy.get(':nth-child(14) > :nth-child(6) > :nth-child(2)').click();
  cy.get('tr > .flex > .px-4').click();
  cy.get('.grid > :nth-child(2) > .block').type('08/21/2024');
  cy.get(':nth-child(3) > .block').type('5000');
  cy.get('#method')
  cy.get('.select2-results__option').contains('ATM').click();
  cy.get(':nth-child(7) > .w-auto').click();

  //deleting a payment
  cy.get(':nth-child(7) > .w-auto').click();
  cy.get('.Deleted successfully!') 
      .should('be.visible') 
      .and('contain.text', 'Deleted successfully!');

  //emails page
  cy.get('ul > :nth-child(5)').click();
  cy.get(':nth-child(1) > .h-\[650px\]').scrollIntoView();
  cy.get('.space-y-8').scrollIntoView();

  // sending an loan approval email
  cy.get(':nth-child(14) > :nth-child(6) > .flex > :nth-child(2)').click();
  cy.get('.h-\[650px\] > .px-8').scrollIntoView();
  cy.get('#subject').click();
  cy.get('.select2-results__option').contains('Loan Approval').click();
  cy.get('#subject').type('Your loan has been approved and is being sent to your number');
  cy.get('.space-y-8 > .bg-red-500').click();

    // sending an loan Denied email
    cy.get(':nth-child(14) > :nth-child(6) > .flex > :nth-child(2)').click();
    cy.get('.h-\[650px\] > .px-8').scrollIntoView();
    cy.get('#subject').click();
    cy.get('.select2-results__option').contains('Loan Denied').click();
    cy.get('#subject').type('Your loan has been Denied beacuse of low credit scoring');
    cy.get('.space-y-8 > .bg-red-500').click();

      // sending an loan disbursed email
  cy.get(':nth-child(14) > :nth-child(6) > .flex > :nth-child(2)').click();
  cy.get('.h-\[650px\] > .px-8').scrollIntoView();
  cy.get('#subject').click();
  cy.get('.select2-results__option').contains('Loan Disbursed').click();
  cy.get('#subject').type('Your loan has been disbursed and is being sent to your number');
  cy.get('.space-y-8 > .bg-red-500').click();

  })
})