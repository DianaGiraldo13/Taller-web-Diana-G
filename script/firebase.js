// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBr2ahFw54Ml0E3RRDvnBnxqw3o8zIMFXw",
  authDomain: "webdiana-3e043.firebaseapp.com",
  projectId: "webdiana-3e043",
  storageBucket: "webdiana-3e043.appspot.com",
  messagingSenderId: "27607811760",
  appId: "1:27607811760:web:bc5d5453ea17b46ff41d75"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const CART_COLLECTION = db.collection("carts")
const cerrarSesion = document.querySelectorAll(".cerrarSesion")
const iniciarSesion = document.querySelectorAll(".iniciarSesion")
const carritoNumero = document.querySelector(".carritoNumero")

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

    carritoNumero.innerText = cart.length

  }

}

let mostrarCarrito = null

const cargarCarrito = () => {

 

  if (loggedUser) {

    CART_COLLECTION.doc(loggedUser.uid).get().then(snapshots => {

      const data = snapshots.data()
      if (!data) {

        return;
      }
      cart = data.cart
      carritoNumero.innerText = data.cart.length

      

      if (mostrarCarrito) {
        mostrarCarrito()
      }
    })

  }



}

cerrarSesion.forEach(element => {

  element.addEventListener("click", () => {
    auth.signOut().then(() => {

      console.log("sesion cerrada")

      cart = []
      carritoNumero.innerText = cart.length
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

      cerrarSesion.forEach(element => {
        element.classList.add("hidden")
      })


      iniciarSesion.forEach(element => {

        element.classList.remove("hidden")

      })

    }

  }
)
