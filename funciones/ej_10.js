'use strict';

let num= Number(prompt("Introduce un numero"));

let sol=operacion(num);

document.write("La raiz cuadrda de "+num+" es: "+sol);

function operacion(num) {
    return Math.sqrt(num);
}