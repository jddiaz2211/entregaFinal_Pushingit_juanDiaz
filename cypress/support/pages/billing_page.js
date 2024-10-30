export class BillingPage {
    visitarCheckoutPage(){
        cy.xpath(`//*[@id="goCheckout"]`).click();
    }


}
