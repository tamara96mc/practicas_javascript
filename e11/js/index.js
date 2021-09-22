/*

Tamara Montero Cano
21/09
Ejercicio 11
*/

let dia = '';

dia = window.prompt('Indica el dia de la semana:');


switch (dia) {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'jueves':
    case 'viernes':
        console.log('El día ' + dia + ' es día laboral');
        break;
    case 'sábado':
    case 'domingo':
        console.log('El día ' + dia + ' no es día laboral');
        break;
    default:
        console.log('No es un día de la semana')
        break;
}


