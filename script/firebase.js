// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC7_Qlo7bi2qQXlfccUfu4ZES9EU24BqQw",
  authDomain: "boxycharm-a54e1.firebaseapp.com",
  projectId: "boxycharm-a54e1",
  storageBucket: "boxycharm-a54e1.appspot.com",
  messagingSenderId: "929716530628",
  appId: "1:929716530628:web:7f809ca121d2a41b1dc891"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const CART_COLLECTION = db.collection("carts")
const PEDIDOS_COLLECTION = db.collection("pedidos")
const cerrarSesion = document.querySelectorAll(".cerrarSesion")
const iniciarSesion = document.querySelectorAll(".iniciarSesion")
const carritoNumero = document.querySelectorAll(".carritoNumero")

const botonmenu = document.querySelector(".contenedor__menu_mobile");
const menu = document.querySelector(".menumobile");
const cerrarmenu = document.querySelector(".cerrar");

botonmenu.addEventListener("click",()=>{

    menu.style.display="block"
});

cerrarmenu.addEventListener("click",()=>{

    menu.style.display="none"
})

let cart = [];
let loggedUser = null;


let IniciarSesion = (usuario) => {

  loggedUser = usuario;
  cargarCarrito()

}


const añadirCarrito = (producto) => {

  if (loggedUser) {

    cart.push(producto)

    CART_COLLECTION.doc(loggedUser.uid).set({ cart })

    carritoNumero.forEach(element=>{

      element.innerText = cart.length
    })

    

  }

}

let mostrarCarrito = null

const cargarCarrito = () => {
    CART_COLLECTION.doc(loggedUser.uid).get().then(snapshots => {

      const data = snapshots.data()
      if (!data) {

        return;
      }

      cart = data.cart
      console.log(carritoNumero)

      carritoNumero.forEach(element=>{

        element.innerText = cart.length
      })
  

      
      if (mostrarCarrito) {
        mostrarCarrito()
      }
    })

 



}

cerrarSesion.forEach(element => {

  element.addEventListener("click", () => {
    auth.signOut().then(() => {

      console.log("sesion cerrada")

      cart = []
      carritoNumero.forEach(element=>{

        element.innerText = cart.length
      })
  
    })
  })
})

auth.onAuthStateChanged(

  (user) => {

    if (user) {

      IniciarSesion(user)


      cerrarSesion.forEach(element => {


        element.classList.remove("hidden")

      })

      iniciarSesion.forEach(element => {


        element.classList.add("hidden")

      })

    }
    else {


      loggedUser = null;
      cart = [];
      carritoNumero.forEach(element=>{

        element.innerText = cart.length
      })
  
      cerrarSesion.forEach(element => {
        element.classList.add("hidden")
      })


      iniciarSesion.forEach(element => {

        element.classList.remove("hidden")

      })

    }

  }
)
