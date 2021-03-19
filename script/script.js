var slideIndex = 1;
showSlides(slideIndex);
console.log('ok')
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image__slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function moveToSubscribe(){
    document.getElementById("subscribe").focus();
}


//interacción


const imagenes__cajita = document.getElementsByClassName('imagenes__cajita');

const imagen__circuloamarillo = document.querySelector('.imagen__circuloamarillo');
imagen__circuloamarillo.addEventListener('click',clickAmarillo);


function clickAmarillo (){
    imagenes__cajita[0].setAttribute('src','./../cajaamarilla.png')
}

//otracaja

const imagen__circulonegro = document.querySelector('.imagen__circulonegro');
imagen__circulonegro.addEventListener('click',clickNegro);


function clickNegro (){
    imagenes__cajita[0].setAttribute('src','./../cajanegra.png')
}

//otra caja

const imagen__circuloverde = document.querySelector('.imagen__circuloverde');
imagen__circuloverde.addEventListener('click',clickVerde);


function clickVerde (){
    imagenes__cajita[0].setAttribute('src','./../cajaverde.png')
}

//otra caja

const imagen__circulonaranja = document.querySelector('.imagen__circulonaranja');
imagen__circulonaranja.addEventListener('click',clickNaranja);


function clickNaranja (){
    imagenes__cajita[0].setAttribute('src','./../cajanaranja.png')

}

//otra caja

const imagen__circuloazul = document.querySelector('.imagen__circuloazul');
imagen__circuloazul.addEventListener('click',clickAzul);


function clickAzul (){
    imagenes__cajita[0].setAttribute('src','./../cajaazul.png')

}






