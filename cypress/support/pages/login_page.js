export class LoginPage {

    visitarPaginalogin() {
        cy.visit('')
        cy.xpath('//*[@id="registertoggle"]').dblclick()
    }


}
