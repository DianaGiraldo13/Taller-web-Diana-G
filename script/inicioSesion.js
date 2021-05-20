const correo = document.querySelector("#loginCorreo")
const contraseña = document.querySelector("#loginContraseña")
const btnIniciarSesion = document.querySelector(".btnIniciar")


btnIniciarSesion.addEventListener("click",()=>{


    if(correo.value==""||contraseña.value==""){

        alert("ingrese todos los campos")
    }
    else{

        auth.signInWithEmailAndPassword(correo.value,contraseña.value).then(()=>{

            window.location.href = "productos.html"
        })
    }
})