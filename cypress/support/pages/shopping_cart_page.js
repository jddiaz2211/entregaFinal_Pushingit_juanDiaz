export class ShoppingCartPage {

    verificarProducto(producto){
        cy.xpath(`//*[contains(text(),'${producto}')]`).should('be.visible');
    }

    verificarCantidadProducto(producto,cantidad){
        cy.xpath(`//*[contains(text(),'${producto}')]//preceding-sibling::p[@id="productAmount"]`)
        .invoke('text')
        .should('equal',`${cantidad}`);
    }

    verificarPrecioProducto(producto,precio){
        cy.xpath(`//*[contains(text(),'${producto}')]//following-sibling::p[@id="unitPrice"]`)
        .invoke('text')
        .should('equal',"$"+`${precio}`);
    }


    verificarTotalPrice(producto,precio,cantidad){
        cy.xpath(`//*[contains(text(),'${producto}')]//following-sibling::p[@id="totalPrice"]`)
        .invoke('text')
        .should('equal',"$"+(`${precio}`*`${cantidad}`));
    }

    mostrarTotalPrice(){
        cy.xpath(`//*[contains(text(),"Show total price")]`).click();
    }

    verificarPrecioShoppingCartTotal (precio_final){
        cy.xpath(`//*[@id="price"]/b`)
        .invoke('text')
        .should('equal',`${precio_final}`);
        }

    visitarBillingPage(){
        cy.xpath(`//*[@data-cy="goBillingSummary"]`).click();
    }
    
}