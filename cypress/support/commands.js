

Cypress.Commands.add("ApiRegisterlogin", (usuario, clave,genero,dia,mes,anio) => {
    cy.request({
        method: "POST",
        url: "https://pushing-it-3.onrender.com/api/register",
        headers: {
        },
        body: {
            username: usuario,
            password: clave,
            gender: genero,
            day: dia,
            month: mes,
            year: anio
        }
    }).then((response) => {
        expect(response).to.have.property("statusText","Created");
        expect(response.body.newUser).to.have.property("username",usuario);
        window.localStorage.setItem("token", response.body.token); 
        window.localStorage.setItem("user", response.body.newUser.username);
        window.localStorage.setItem("userId", response.body.newUser._id); 

    });
})



Cypress.Commands.add("EliminarUsuario", (usuario) => {
    cy.request({
        method: "DELETE",
        url: `https://pushing-it-3.onrender.com/api/deleteuser/${usuario}`,
        headers: {
        },
    }).then((response) => {
        expect(response).to.have.property("statusText","Accepted");
    });
})



