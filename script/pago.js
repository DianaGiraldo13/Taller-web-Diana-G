const formularioPago = document.querySelector(".formularioPago");

const ordenLS = localStorage.getItem("orden");
let ordenFinal = JSON.parse(ordenLS)


formularioPago.addEventListener("submit", (event) => {

    event.preventDefault();

    ordenFinal.tarjeta=formularioPago.tarjeta.value
    ordenFinal.direccion=formularioPago.direccion.value


    PEDIDOS_COLLECTION.add(ordenFinal).then(() => {

        window.location.href = "confirmacion.html"

        CART_COLLECTION.doc(loggedUser.uid).set({ cart: [] })
    })

})