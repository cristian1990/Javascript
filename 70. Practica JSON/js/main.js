/*===========================================
              PRACTICA JSON
objeto = "clave" : "valor";
Siempre se debe asignar un "valor" o habra error.
Siempre va entre comillas dobles ("valor"), a menos que el valor sea un numero.
===========================================*/

//PEDIMOS LOS DATOS AL SERVIDOR
var xhttp = new XMLHttpRequest(); //Trae los datos del servidor
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //Mostramos por pantalla
        var respuesta = JSON.parse(xhttp.responseText); //Trae la respuesta del servidor y la convertimos en objeto JSON
        var personas = respuesta.personas;

        var salida = "";

        for (var i = 0; i < personas.length; i++) {
            salida += "<li>" + personas[i].nombre + " es " + personas[i].apellido + "<li>";
        }

        document.getElementById("idPersonas").innerHTML = salida;
    }
};
xhttp.open("GET", "personas.json", true);
xhttp.send();