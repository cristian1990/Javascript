/*===========================================
           PRACTICA IMAGEN 2
===========================================*/
function miFuncion(lenguaje){

  var elemento = document.getElementById("foto");

  if(lenguaje === "java"){
    elemento.src = "img/java.jpg";  
  }
  else if(lenguaje === "javascript"){
    elemento.src = "img/javascript.jpg"; 
  }
  else if(lenguaje === "php"){
    elemento.src = "img/php.jpg"; 
  }

}
