const db = firebase.firestore();
const storage = firebase.storage();
const formulario = document.querySelector(".formulario");
const productImg = document.querySelector(".formularioImg");
const imageFiles=[];

console.log(formulario)
//actualiza la vista previa de la imagen
formulario.imagen.addEventListener("change", () => {

    var reader = new FileReader();
    const file = formulario.imagen.files[0];
    reader.readAsDataURL(formulario.imagen.files[0]);
    imageFiles.push(file);

});


formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const product = {
    nombre: formulario.nombre.value,
    precio: parseFloat(formulario.precio.value),
    categoria: formulario.categoria.value,
    marca: formulario.marca.value,
    descripcion: formulario.descripcion.value

    }

    
    db.collection("products").add(product).then(function (docref) {

        const uploadPromises = [];
        const downloadURLPromises = [];

        imageFiles.forEach(function (file) {

            let storageRef = firebase.storage().ref();
            let fileRef = storageRef.child(`products/${docref.id}/${file.name}`);

            uploadPromises.push(fileRef.put(file))

        })

        Promise.all(uploadPromises).then(function (snapshots) {

            snapshots.forEach(function (snapshot) {

                downloadURLPromises.push(snapshot.ref.getDownloadURL())

            });

            Promise.all(downloadURLPromises).then(function (dowloadURL) {
                const imagenes= []

                dowloadURL.forEach(function (url,index){

                    imagenes.push({

                        url:url,
                        ref:snapshots[index].ref.fullPath
                    });

                })

                db.collection("products").doc(docref.id).update({

                    imagenes:imagenes
                }).then(function (){

                    console.log("producto agregado")
                })

                
            })

        })
    }).catch(function (error){

        console.log(error)
    })
    

});