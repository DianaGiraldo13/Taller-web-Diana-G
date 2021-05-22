const carritoLista = document.querySelector(".carrito__lista")

mostrarCarrito =()=>{
    let total = 0;
    carritoLista.innerHTML =""
    cart.forEach((data)=>{

        const productoCarrito = document.createElement("div");
        
        
        
        productoCarrito.innerHTML = `
        
        <div class="productoCarrito__imagen">

        <img src="${data.images[0]?.url}" alt="">
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
    
}