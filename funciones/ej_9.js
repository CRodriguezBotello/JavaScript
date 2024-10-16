'use strict';

let num=Number(prompt("Introduce un numero"));

let sol=operacion(num);
document.write("El exponente de "+num+" es: "+sol);

function operacion(num) {
    return num*num*num;
}