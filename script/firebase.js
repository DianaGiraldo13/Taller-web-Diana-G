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
const cerrarSesion = document.querySelectorAll(".cerrarSesion")

cerrarSesion.forEach(element => {

  element.addEventListener("click", () => {

    auth.signOut().then(console.log("sesion cerrada"))
    
  })
})
auth.onAuthStateChanged(

  (user) => {

    if (user) {

      console.log("usuario")
      cerrarSesion.forEach(element => {

       
        element.classList.remove("hidden")
        
      })

    }
    else {
      console.log("no usuario")
      cerrarSesion.forEach(element => {
        element.classList.add("hidden")
      })
    }


  }
)
