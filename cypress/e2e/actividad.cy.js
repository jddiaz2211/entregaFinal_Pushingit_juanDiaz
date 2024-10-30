import { LoginPage } from "../support/pages/login_page";
import { HomePage } from "../support/pages/home_page";
import { ProductsPage } from "../support/pages/products_page";
import { ShoppingCartPage } from "../support/pages/shopping_cart_page";
import { BillingPage } from "../support/pages/billing_page";
import { CheckOutPage } from "../support/pages/checkout_page";
import { ReciptPage } from "../support/pages/recipt";

describe('Preentrega', () => {
    const homePage = new HomePage
    const productsPage = new ProductsPage
    const shoppingCartPage = new ShoppingCartPage
    const billingPage = new BillingPage
    const checkOutPage = new CheckOutPage
    const reciptPage = new ReciptPage

    var precio_carrito_total

    let data
    let dataApi
    let checkoutData
    before(() => {
        cy.fixture('productos').then((puente) => {
            data = puente
        })

        cy.fixture('dataApi').then((puente2) => {
            dataApi = puente2
        })

        cy.fixture('checkout').then((puente) => {
            checkoutData = puente
        })

    })

    beforeEach(() => {
        cy.ApiRegisterlogin(dataApi.username, dataApi.password, dataApi.gender, dataApi.day, dataApi.month, dataApi.year,{ timeout: 10000 })
        cy.visit("") 
    })

    after(() => {
        cy.EliminarUsuario(dataApi.username)
    })

    it.only('desafio', () => {

        homePage.visitarOnlineShop()
        productsPage.agregarProducto(data.producto_1.nombre)
        productsPage.cerrarMessageAlert()
        productsPage.agregarProducto(data.producto_1.nombre)
        productsPage.cerrarMessageAlert()
        productsPage.agregarProducto(data.producto_2.nombre)
        productsPage.cerrarMessageAlert()
        productsPage.visitarShoppingCart()
        //Validacion producto 1
        cy.log("Validacion producto 1")
        shoppingCartPage.verificarProducto(data.producto_1.nombre)
        shoppingCartPage.verificarCantidadProducto(data.producto_1.nombre, data.producto_1.cantidad)
        shoppingCartPage.verificarPrecioProducto(data.producto_1.nombre, data.producto_1.precio)
        shoppingCartPage.verificarTotalPrice(data.producto_1.nombre, data.producto_1.precio, data.producto_1.cantidad)
        //Validacion producto 2
        cy.log("Validacion producto 2")
        shoppingCartPage.verificarProducto(data.producto_2.nombre)
        shoppingCartPage.verificarCantidadProducto(data.producto_2.nombre, data.producto_2.cantidad)
        shoppingCartPage.verificarPrecioProducto(data.producto_2.nombre, data.producto_2.precio)
        shoppingCartPage.verificarTotalPrice(data.producto_2.nombre, data.producto_2.precio, data.producto_2.cantidad)

        shoppingCartPage.mostrarTotalPrice()
        precio_carrito_total = (data.producto_1.precio * data.producto_1.cantidad) + (data.producto_2.precio * data.producto_2.cantidad)
        shoppingCartPage.verificarPrecioShoppingCartTotal(precio_carrito_total)
        shoppingCartPage.visitarBillingPage()
        billingPage.visitarCheckoutPage()
        checkOutPage.completarCheckout(checkoutData.nombre, checkoutData.apellido, checkoutData.tarjeta)
        reciptPage.validarComprador(checkoutData.nombre, checkoutData.apellido)
        reciptPage.validarProducto(data.producto_1.nombre, data.producto_1.cantidad)
        reciptPage.validarProducto(data.producto_2.nombre, data.producto_2.cantidad)
        reciptPage.validarTarjeta(checkoutData.tarjeta)
        reciptPage.validarPrecio(precio_carrito_total)
    })

})