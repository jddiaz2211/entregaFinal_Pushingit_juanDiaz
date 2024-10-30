export class ProductsPage {

    agregarProducto(producto) {
        cy.xpath(`//p[contains(text(),'${producto}')]//following-sibling::div/child::button[3]`).click();
    }

    cerrarMessageAlert(){
        cy.xpath(`//button[@id='closeModal']`).click();

    }

    visitarShoppingCart(){
        cy.xpath(`//button[@id='goShoppingCart']`).click();
    }


}