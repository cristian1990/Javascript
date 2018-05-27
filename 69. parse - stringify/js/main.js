/*===========================================
             parse - stringify
parse = Sirve para convertir STRING en objeto JSON
stringify = Sirve para convertir objetos JSON en STRING
===========================================*/

//Creamos un string con formato JSON
var cadenaJSON = '{"nombre" : "Luis","apellido" : "Silva","edad" : 20,"salario" : 2000}';

//Imprimimos el tipo de variable con typeof
document.write("Tipo de dato: " + typeof cadenaJSON);

//-----------------------------------------------------------------------------------

//Convertimos la cadena en objeto JSON
var personaJSON = JSON.parse(cadenaJSON);

//Imprimimos el tipo de variable con typeof
document.write("<br>Tipo de dato: " + typeof personaJSON);

//-----------------------------------------------------------------------------------

//Convertimos objeto JSON en un STRING
var personaSTRING = JSON.stringify(personaJSON);

//Imprimimos el tipo de variable con typeof
document.write("<br>Tipo de dato: " + typeof personaSTRING);