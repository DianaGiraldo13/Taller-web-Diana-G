const registrarse = document.querySelector(".btnIniciar")
const nombre = document.querySelector("#loginNombre")
const correo = document.querySelector("#registrarseCorreo")
const contraseña = document.querySelector("#registrarseContraseña")



registrarse.addEventListener("click", () => {

    if (nombre.value == "" || correo.value == "" || contraseña.value == "") {

        alert("complete todos los campos")
    }

    else {



        auth.createUserWithEmailAndPassword(correo.value, contraseña.value).then(

            (data) => {
                console.log(data)
                let usuario = {
                    id: data.user.uid,
                    nombre: nombre.value,
                    correo: correo.value
                }
                db.collection("usuarios").doc(usuario.id).set(usuario).then(() => {

                    window.location.href = "productos.html"
                })

            }
        )


    }
})


