const pedidosadmin = document.querySelector(".pedidosadmin")

administrador=()=>{

    if(loggedUser.admin){

        db.collection("pedidos").get().then((querysnapshot) => {

            querysnapshot.forEach((doc) => {
    
                
                const ordenes = document.createElement("div");
                ordenes.classList.add("orden")
                const orden = doc.data()
               
    
                orden.idproductos.forEach((id) => {
                    
                    
                    db.collection('products').doc(id).get().then((doc) => {
                        
                        
                        const producto = doc.data()
                       
                        const productoCarrito = document.createElement("div")
    
                        productoCarrito.innerHTML = `
                        
                        <div class="imagenContainer">
                        <img class="productos__imagen" src="${producto.imagenes[0].url}" alt="">
                        </div>
                        
                       
                        </a>
                         
                        <div class="productos__info">
                
                            <h3 class="productos__titulo">
                
                                ${producto.nombre}
                
                            </h3>
                
                            <h3 class="productos__precio">
                                
                                ${producto.precio}
                
                            </h3>
                
                
                        </div>
                        
                        `
                        
                        productoCarrito.classList.add("productos");
                        ordenes.appendChild(productoCarrito);
                    })
    
                })
    
                pedidosadmin.appendChild(ordenes)
    
    
            })
        })


    }
} 



