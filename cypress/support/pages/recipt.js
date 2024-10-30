
export class ReciptPage {

    validarComprador(nombre, apellido) {
        cy.xpath(`//p[contains(normalize-space(.), '${nombre} ${apellido}')]`).should('be.visible');
    }

    validarProducto(producto,cantidad) {
        cy.xpath(`//p[contains(normalize-space(.), '${cantidad} x ${producto}')]`).should('be.visible');
    }

    validarTarjeta(tarjeta) {
        cy.xpath(`//span[@id="creditCard"]`).invoke('text').should('equal', tarjeta);
    }

    validarPrecio(precio) {
        cy.xpath(`//p[contains(normalize-space(.), '${precio}')]`).invoke('text').should('include', precio);
    }


}