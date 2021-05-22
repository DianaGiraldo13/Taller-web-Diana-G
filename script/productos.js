const list = document.querySelector('.list');
const categorias = document.querySelector(".categorias");
const filtro = document.querySelector(".filtros")
const marcas = document.querySelector(".marcas")
const precios = document.querySelector(".precios")


function handleProductoitem(querySnapshot) {

    list.innerHTML=""
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
       const  btnCarrito = productos.querySelector(".btnCarrito")

       btnCarrito.addEventListener("click",()=>{

        
        añadirCarrito({
            ...data,
            id: doc.id
        })

       })

    })


}
filtro.addEventListener("change", () => {

    let productsCollection = db.collection('products');
    const categoriasArray = [];
    const marcasArray=[]

    categorias.categoria.forEach(function (checkbox) {

        if (checkbox.checked) {

            categoriasArray.push(checkbox.getAttribute("data-categoria"))
        }

    })

  
    marcas.marca.forEach(function (element){

        if(element.checked){

            marcasArray.push(element.value)
            productsCollection = productsCollection.where('marca', '==', element.value);
        }
    })

    if (marcasArray.length > 0) {

        
       
    }
    if (categoriasArray.length > 0) {

        productsCollection = productsCollection.where('categoria', 'in', categoriasArray);
       
    }


    precios.precio.forEach(function (element){

        if(element.checked){
            
            switch(element.value){

                case "1":

                    productsCollection = productsCollection.where('precio', '>', 25000)
                    productsCollection = productsCollection.where('precio', '<', 50000)
                    
                break;

                case "2":

                    productsCollection = productsCollection.where('precio', '>', 50000)
                    productsCollection = productsCollection.where('precio', '<', 100000)
                    
                break;

                case "3":

                    productsCollection = productsCollection.where('precio', '>', 100000)
                    productsCollection = productsCollection.where('precio', '<', 200000)
                    
                break;
            }
            
        }
    })

    
    productsCollection.get().then(handleProductoitem)
})


db.collection("products").get().then(handleProductoitem);


