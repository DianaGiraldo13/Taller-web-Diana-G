const pedidosadmin = document.querySelector(".pedidosadmin")

administrador=()=>{

    if(loggedUser.admin){

        db.collection("pedidos").get().then((querysnapshot) => {

            querysnapshot.forEach((doc) => {
    
                
                const ordenes = document.createElement("div");
               
                const orden = doc.data()
    
                orden.idproductos.forEach((id) => {
                    
                    console.log(id)
                    db.collection("productos").doc(id).get().then((snapshot) => {
    
                        const producto = snapshot.data()
                        console.log(producto)
                        const productoCarrito = document.createElement("div")
    
                        productoCarrito.innerHTML = `
                        
                        <div class="cartProduct__image">
                        <img src="${producto.imagenes[0]?.url}"
                            >
                                </div>
                        <div class="cartProduct__info">
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class="cartProduct__price">
                            <p>$ ${producto.precio}</p>
                        </div>
                    </div>
                        `
                        productoCarrito.classList.add("productoCarrito");
                        ordenes.appendChild(productoCarrito);
                    })
    
                })
    
                pedidosadmin.appendChild(ordenes)
    
    
            })
        })


    }
} 



