const formulario = document.querySelector(".formulario");

let orden =null;

if(formulario){

    
    formulario.addEventListener("submit", (event) => {

        event.preventDefault();
        const idproductos = [];
    
        cart.forEach(function (data) {
            idproductos.push(data.id);
        });
    
    
         orden = {
            nombre: formulario.nombre.value,
            cedula: formulario.cedula.value,
            idusuario: loggedUser.uid,
            idproductos: idproductos
    
        }

        localStorage.setItem("orden",JSON.stringify(orden));

    
        window.location.href="pago.html"
    
    })

}
