const productos = [
    {
        img: 'Doll_Face-removebg-preview.png',
        titulo: ' Mate Peach Kiss Lipstick',
        precio: 44000,
    },

    {
        img: '651986701308_1-removebg-preview.png',
        titulo: ' Born This Way Foundation',
        precio: 168000,
    },

    {
        img: 'Doll_Face-removebg-preview.png',
        titulo: 'loremmmmmm',
        precio: 40000,
    },

    {
        img: 'Doll_Face-removebg-preview.png',
        titulo: 'loremeeeee',
        precio: 49000,
    },

    {
        img: 'Doll_Face-removebg-preview.png',
        titulo: 'loremmmmmm',
        precio: 40000,
    },

    {
        img: 'Doll_Face-removebg-preview.png',
        titulo: 'loremeeeee',
        precio: 49000,
    },

    {
        img: 'Doll_Face-removebg-preview.png',
        titulo: 'loremmmmmm <br> hhdoidnahifkl',
        precio: 40000,
    },


]
//<a href ="./product.html?id=${doc.id}&=${data.name}">

const list = document.querySelector('.list');

function handleProductoitem(querySnapshot){

        querySnapshot.forEach((doc)=>{

        const data = doc.data();

        const productos = document.createElement('div');
        productos.innerHTML = `
        
        <a href ="#">
        <div class="imagenContainer">
        <img class="producto__imagen" src="${data.imagenes[0].url}" alt="">
        </div>
        
        
        <div class="producto__info">

            <h1 class="producto__titulo">

                ${data.nombre}

            </h1>

            <h3 class="producto__precio">
                
                ${data.precio}

            </h3>


        </div>
        </a>
        <img class="btnCarrito" src="./shop.png">
        `;

        productos.classList.add('producto');
       
        
        list.appendChild(productos);

        })
        

}
db.collection("products").get().then(handleProductoitem)
