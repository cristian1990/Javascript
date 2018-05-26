/*===========================================
            PRACTICA IMAGEN
===========================================*/
var fotoMostrada = "primeraFoto";

function miFuncion(){
  var imagen = document.getElementById("foto"); //Guardamos la url de imagen 2 ya que hicimos click
  console.log(imagen);

  if(fotoMostrada == "primeraFoto"){ //entra directo
    imagen.src = "img/imagen2.png" //mostramos la imagen 2
    fotoMostrada = "segundaFoto";
  }
  else{ //Si no mostramos la imagen 1
    imagen.src = "img/imagen1.png";
    fotoMostrada = "primeraFoto";
  }

}
