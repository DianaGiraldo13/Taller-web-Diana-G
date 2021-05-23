const list = document.querySelector('.list');
const categorias = document.querySelector(".categorias");
const filtro = document.querySelector(".filtros")
const marcas = document.querySelector(".marcas")
const precios = document.querySelector(".precios")
const ordenar = document.querySelector(".ordenar")




function handleProductoitem(querySnapshot) {

    list.innerHTML = ""
    querySnapshot.forEach((doc) => {
        const data = doc.data();

        const productos = document.createElement('div');
        productos.innerHTML = `
        
        <a href ="./producto.html?id=${doc.id}&=${data.nombre}">
        <div class="imagenContainer">
        <img class="productos__imagen" src="${data.imagenes[0].url}" alt="">
        </div>
        
        
        <div class="productos__info">

            <h1 class="productos__titulo">

                ${data.nombre}

            </h1>

            <h3 class="productos__precio">
                
                ${data.precio}

            </h3>


        </div>
        </a>
        <img class="btnCarrito" src="./shop.png">
        `

        productos.classList.add('productos');
        list.appendChild(productos);
        const btnCarrito = productos.querySelector(".btnCarrito")

        btnCarrito.addEventListener("click", () => {


            añadirCarrito({
                ...data,
                id: doc.id
            })

        })

    })


}




let cambio = false;
filtro.addEventListener("change", () => {

    ordenar.addEventListener("change", () => {
  

        if (ordenar.ordenarProductos.value) {
    
            switch (ordenar.ordenarProductos.value) {
    
                case "1":
    
                productsCollection=productsCollection.orderBy("precio","asc")
                
                    break;
    
                case "2":
                    productsCollection=productsCollection.orderBy("precio","desc")
                    break;
            }
    
            productsCollection.get().then(handleProductoitem)
        }
    })

    let productsCollection = db.collection('products');
    const categoriasArray = [];
    const marcasArray = []

    categorias.categoria.forEach(function (checkbox) {

        if (checkbox.checked) {

            productsCollection = productsCollection.where('categoria', '==', checkbox.value)
        }

    })


    marcas.marca.forEach(function (element) {

        if (element.checked) {

            marcasArray.push(element.value)
   
        }
    })

    
    if (marcasArray.length > 0) {
        
        productsCollection = productsCollection.where('marca', 'in', marcasArray)
    
    }

   

   

    precios.precio.forEach(function (element) {

        
        if (element.checked) {

            switch (element.value) {

               
                case "1":
                  
                    productsCollection = productsCollection.where('precio', '>=', 25000)
                    productsCollection = productsCollection.where('precio', '<=', 50000).orderBy("precio")
                    

                    break;

                case "2":
                    
                  
                    productsCollection = productsCollection.where('precio', '>=', 50000)
                    productsCollection = productsCollection.where('precio', '<=', 100000).orderBy("precio")
                  

                    break;

                case "3":
                   
                    productsCollection = productsCollection.where('precio', '>=', 100000).orderBy("precio")

                    break;
            }

        }
    })

   
    productsCollection.get().then(handleProductoitem)
})

ordenar.addEventListener("change", () => {

    if(!cambio){

        let productsCollection = db.collection('products');

        if (ordenar.ordenarProductos.value) {
    
            switch (ordenar.ordenarProductos.value) {
    
                case "1":
    
                productsCollection=productsCollection.orderBy("precio","asc")
                
                    break;
    
                case "2":
                    productsCollection=productsCollection.orderBy("precio","desc")
                    break;
            }
    
            productsCollection.get().then(handleProductoitem)
        }

    }
   
})


db.collection("products").get().then(handleProductoitem);


