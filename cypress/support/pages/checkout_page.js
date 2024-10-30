export class CheckOutPage {
    completarCheckout(nombre,apellido,numeroTarjeta){
        cy.xpath(`//*[@id="FirstName"]`).type(nombre);
        cy.xpath(`//*[@id="lastName"]`).type(apellido);
        cy.xpath(`//*[@id="cardNumber"]`).type(numeroTarjeta);
        cy.xpath(`//*[@data-cy="purchase"]`).click();
    }



}