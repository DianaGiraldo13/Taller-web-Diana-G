const params = new URLSearchParams(location.search);
const imagen = document.querySelector(".producto__imagen")
const marca = document.querySelector(".productoMarca");
const nombre = document.querySelector(".productoNombre")
const precio = document.querySelector(".productoPrecio")
const queEs = document.querySelector(".productoQueEs")
const modoDeUso = document.querySelector(".productoModoDeUso")
const descripcion = document.querySelector(".productoDescripcion")
const encanta = document.querySelector(".productoEncanta")

const id = params.get("id")

if(!id){

    //404 
}

db.collection("products").doc(id).get().then(function(doc){

    const data = doc.data();
    
    imagen.src=data.imagenes[0].url
    marca.innerText=data.marca
    nombre.innerText = data.nombre
    precio.innerText = "$"+data.precio
    let divido = data.descripcion.split("/")
    console.log(divido)
    queEs.innerText=divido[0]
    modoDeUso.innerText=divido[1]
    let splitEncanta = divido[2].split("•")
    console.log(splitEncanta)
    //encanta.innerText=

    for(let i=1;i<splitEncanta.length;i++){

        let listaEncanta = document.createElement("p")
        listaEncanta.innerText="•"+splitEncanta[i]
        encanta.appendChild(listaEncanta)
    }

    
})


