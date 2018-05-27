/*===========================================
                 JSON
Es un formato para almacenar y transportar datos.
Se utiliza a menudo cuando se envían datos desde un servidor a una página web.
===========================================*/

//Creamos un objeto JSON
var personaJSON = {
    "nombre" : "Luis",
    "apellido" : "Silva",
    "edad" : 20,
    "salario" : 2000
};

//Accedemos al valor de la propiedad nombre
//document.write(personaJSON.nombre + " tiene " + personaJSON.edad + " años");

//Para ver el valor de cada propiedad en pantalla
var cliente = "";

cliente += "Nombre: " + personaJSON.nombre + "<br>";
cliente += "Apellido: " + personaJSON.apellido + "<br>";
cliente += "Edad: " + personaJSON.edad + "<br>";
cliente += "Salario: " + personaJSON.salario + "<br>";

var elemento = document.getElementById("info");
elemento.innerHTML = cliente;