/*===========================================
    AGREGANDO ELEMENTOS A UNA LISTA
===========================================*/
var arreglo = ["Verde", "Blanco", "Rojo", "Amarillo"];
var colores = "";

for(var i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);

    colores += "<li>" + arreglo[i] + "</li>";
}

document.getElementById("info").innerHTML = "<ol>" + colores;