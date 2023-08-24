Cypress.Commands.add("loginToSteam", (username, password) => {
    cy.get(' #acceptAllButton > span').click();

    cy.get(':nth-child(1) > .newlogindialog_TextInput_2eKVn').type(username).should("be.visible");

    cy.get(':nth-child(2) > .newlogindialog_TextInput_2eKVn').type(password).should("be.visible");

    cy.get('button[type="submit"]').click();
});