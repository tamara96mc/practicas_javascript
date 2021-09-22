/*

Tamara Montero Cano
21/09
Ejercicio 12
*/

let contraseya= "123";
let valor = "";
let num_errores = 0;

do {

    valor  = window.prompt('Indica la contraseña');
    
    if(contraseya == valor){
        alert('Contraseña valida');
    }else if(contraseya != valor){
        ++num_errores;
        alert('Contraseña no es valida')
    }
    
} while (contraseya != valor && num_errores<3);

if (contraseya != valor){
    alert('No hay más intentos')
}


