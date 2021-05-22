const carritoLista = document.querySelector(".carrito__lista")
const numeroTotal = document.querySelector(".totalNumero")
const btnpagar = document.querySelector(".btnPagar");

mostrarCarrito =()=>{

    console.log(cart)
    let total = 0;
    carritoLista.innerHTML =""
    cart.forEach((data)=>{

        const productoCarrito = document.createElement("div");
        
        
        
        productoCarrito.innerHTML = `
        
        <div class="productoCarrito__imagen">

        <img src="${data.imagenes[0]?.url}" alt="">
    </div>

    <div class="productoCarrito__informacion">
        <p> ${data.nombre}</p>
    </div>

    <div class="productoCarrito__precio">
        <p> ${data.precio}</p>
    </div>

        `
        productoCarrito.classList.add("productoCarrito");
      
        total+=data.precio
        carritoLista.appendChild(productoCarrito)
    
    })
    numeroTotal.innerText = "$"+ total

    btnpagar.addEventListener("click",()=>{

        window.location.href = "identificacion.html"
    })
}