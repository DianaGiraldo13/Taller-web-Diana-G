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
        titulo: 'loremmmmmm',
        precio: 40000,
    },


]

const list = document.querySelector('.list');

function handleProductoitem(item){
    
        const productos = document.createElement('a');
        productos.innerHTML = `
        
        <img class="producto__imagen" src="${item.img}" alt="">

        <div class="producto__info">

            <h1 class="producto__titulo">

                ${item.titulo}

            </h1>

            <h3 class="producto__precio">
                
                ${item.precio}

            </h3>


        </div>

        `;

        productos.classList.add('productos');
        productos.setAttribute('href', '#');
        
        list.appendChild(productos);

}

productos.forEach(handleProductoitem)