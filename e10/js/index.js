/*

Tamara Montero Cano
21/09
Ejercicio 10
*/


let numero = window.prompt('Número de productos vendidos:');

let valor_num = parseFloat(numero);

let total = 0;

for (let i = 0; i < valor_num; i++) {
    
let valor = window.prompt('Precio del ' + i + 'º producto:');

total = total + parseFloat(valor);
}

console.log('El total es '+ total);



