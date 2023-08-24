// import 'cypress-file-upload';
import "./passwords.js";

describe("Steam Web Login Test", () => {
    it("Should open Steam Web and perform login", () => {

        cy.visit("https://steamcommunity.com/login/home/?goto=");
        cy.wait(1000);
        cy.loginToSteam("cypress123123123", "mikromolekula1100_");
        cy.wait(2000);
        cy.get('.btn_profile_action > span').click();
        cy.wait(1000);
        cy.get('[href="/profiles/76561199544869818/edit/avatar"]').click();
        cy.wait(1000);
        cy.get('.avatar_AvatarDialogUploadArea_22Ena');
        cy.get(':nth-child(3) > img').click();
        cy.wait(1000);
        cy.get('.avatar_AvatarDialogUploadArea_22Ena > .DialogButton');
        cy.wait(1000);
        cy.get('.Primary').click();
        cy.wait(1000);
        cy.get('#account_pulldown').click();
        cy.wait(1000);
        cy.get('#account_dropdown > :nth-child(1) > [href="https://steamcommunity.com/profiles/76561199544869818/"]').click();
        cy.reload();
    });

});

        // cy.get('.upload-successful-message').should('be.visible');



        // cy.contains("Friends Online").should("be.visible");
        // cy.get(' #acceptAllButton > span').click();
        // cy.get(':nth-child(1) > .newlogindialog_TextInput_2eKVn').type("cypress123123123");
        // cy.get(':nth-child(2) > .newlogindialog_TextInput_2eKVn').type("mikromolekula1100_");
        // cy.get('button[type="submit"]').click();