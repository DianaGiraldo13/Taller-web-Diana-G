const params = new URLSearchParams(location.search);
const imagen = document.querySelector(".producto__imagen")
const marca = document.querySelector(".productoMarca");
const nombre = document.querySelector(".productoNombre")
const precio = document.querySelector(".productoPrecio")
const queEs = document.querySelector(".productoQueEs")
const modoDeUso = document.querySelector(".productoModoDeUso")
const descripcion = document.querySelector(".productoDescripcion")
const encanta = document.querySelector(".productoEncanta")
const tituloEncanta = document.querySelector(".tituloEncanta");
const flechaDerechaProducto= document.querySelector(".flechaDerechaProducto")
const flechaIzquierdaProducto= document.querySelector(".flechaIzquierdaProducto")
let  productoActual;
let imagenActual=0;

flechaIzquierdaProducto.addEventListener("click",()=>{
    
     
    if(imagenActual-- > 0){

        imagenActual-1
        
        imagen.src=productoActual.imagenes[imagenActual].url
         
    } else{

        imagenActual=0;
    }
    
    
});

flechaDerechaProducto.addEventListener("click",()=>{
   

    if(imagenActual+1 < productoActual.imagenes.length){

        imagenActual= imagenActual+1
        imagen.src=productoActual.imagenes[imagenActual].url
         
    }
    else{

        imagenActual=productoActual.imagenes.length-1;
    }
    

});

function updateImage(){
    imagen.src=productoActual.imagenes[imagenActual].url
}


const id = params.get("id")

if(!id){

    //404 
}

db.collection("products").doc(id).get().then(function(doc){

    const data = doc.data();
    productoActual=data;
    marca.innerText=data.marca
    imagen.src=data.imagenes[imagenActual].url
    nombre.innerText = data.nombre
    precio.innerText = "$"+data.precio
    let divido = data.descripcion.split("/")
    queEs.innerText=divido[0]
    modoDeUso.innerText=divido[1]
  

    // verifica si tiene seccion lo que nos encanta
    if(divido[2]){

        let splitEncanta = divido[2].split("•")
        for(let i=1;i<splitEncanta.length;i++){

            let listaEncanta = document.createElement("p")
            listaEncanta.innerText="•"+splitEncanta[i]
            encanta.appendChild(listaEncanta)
        }
    }
    else{

        tituloEncanta.style.display="none";

    }
    
    

    
})


