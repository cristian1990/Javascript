/*=====================================
PLUGING
Jsformat (ctrl + alt + f)
Console wrap (ctrl + shieft + q)
TypeScript (sintaxis)
Angular2 HTML Syntax (Sintaxis) 
=====================================*/

//El método getDay () devuelve el día de la semana (de 0 a 6) para la fecha especificada.
var dia;
switch (new Date().getDay()) {
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miercoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case  6:
        dia = "Sabado";
 		break;
 	default: 
        dia = "No es un dia de la semana";
    }

document.getElementById("demo").innerHTML = "El dia es " + dia;