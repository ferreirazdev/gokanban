describe('columns_tasks_tags', () => {
  it('user can create columns, tasks and tags', () => {
    //Login
    cy.visit('http://localhost:3000/');
    cy.findByRole('textbox').type('teste@gmail.com');
    cy.get('.passwordWrapper > input').type('123123');
    cy.findByRole('button', {  name: /sign in/i}).click()
    // Add new column
    cy.get('.addNewColumnWrapper > span').click();
    cy.get('.newColumn > input').type('cypres{enter}');
    
    // Add new task
    cy.get('#root > div > div:nth-child(4) > .handleNewTask').click();
    cy.get('.newTaskWrapper > input').type('cypres{enter}');
    
    //Add new tag
    cy.get('#root > div > div:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div > input').type('cypres{enter}');

    // delete task
    cy.get('#root > div > div:nth-child(4) > div > div:nth-child(2) > div:nth-child(1) > img').click();
  })
})