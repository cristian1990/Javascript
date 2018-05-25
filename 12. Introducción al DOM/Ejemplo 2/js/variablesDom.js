//Variables DOM (Modelo de objetos del documento)
/*El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se 
puede alterar mediante javascript para cambiar dinamicamente los contenidos y aspecto de la pagina*/

//Selecciono el div del html
var caja = document.querySelector("#caja");
console.log("caja: ", caja);

//Cambio los estilos
caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

//Selecciono todos los div
var cajas = document.querySelectorAll(".cajas");
console.log("cajas: ", cajas);


