/*===========================================
            VARIABLE BOOLEAN
===========================================*/
var cliente = "cris";
var finalizar = true;
var nombre;

while (finalizar == true) {
  nombre = prompt("Ingrese el nombre del cliente");

  if (nombre == cliente) {
    document.getElementById("info").innerHTML = "Cliente " + nombre + " fue encontrado";
    finalizar = false;
  }
}
