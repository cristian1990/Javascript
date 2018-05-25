//Agregamos los estilos desde el css
var encabezado = document.getElementById('encabezado');
//Agregamos 2 estilos al titulo
encabezado.className = "titulo tituloColor";

//Agregamos los estilos desde el css
var subtitulo = document.getElementById('subtitulo');
subtitulo.className = "subtitulo";

//Agregamos estilos desde javascript
var parrafo = document.getElementById('parrafo');
parrafo.style.color = "blue";
parrafo.style.background = "gray";
parrafo.style.padding = "10px";
parrafo.style.fontSize = "18px"; //Cambiamos el font-size por fontSize

//Reemplazamos estilos del subtitulo
subtitulo.className = subtitulo.className.replace("subtitulo" ,"subtitulo2");

//-------------------------IMAGEN-----------------------------------
var zoom = function () {
  var thumb = document.getElementById('thumb');

  if (thumb.className == "thumb") {
    thumb.className = "thumb grande";
  }else {
    thumb.className = "thumb";
  }

}
