/*CICLO WHILE DO-WHILE*/

document.write("CICLO WHILE<br>");
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos"];

var numeroDias = dias.length -1;
var i = 0;

while (i <= numeroDias) {
  document.write(dias[i] + "<br>")
  i++;
}


document.write("<br>CICLO DO WHILE<br>");
var colores = ["Rojo", "Verde", "Azul", "Negro", "Blanco", "Violeta", "Gris"];

var numeroColores = colores.length -1;
var i = 0;

do {
  document.write(colores[i] + "<br>")
  i++;
} while (i <= numeroColores);
