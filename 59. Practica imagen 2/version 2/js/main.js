/*===========================================
           PRACTICA IMAGEN 2
===========================================*/
function miFuncion(boton){

  var elemento = document.getElementById("foto");

  if(boton.innerHTML === "Java"){ //Asumimos que el primer boton fue presionado
    elemento.src = "img/java.jpg";  
  }
  else if(boton.innerHTML === "JavaScript"){ //Controlamos el nombre de los button
    elemento.src = "img/javascript.jpg"; 
  }
  else if(boton.innerHTML === "PHP"){
    elemento.src = "img/php.jpg"; 
  }

}
