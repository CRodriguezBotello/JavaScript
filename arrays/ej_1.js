'use strict';

let numeros=[];
for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Introduce el numero "+(i+1)));
}

let sol=operacion(numeros);
document.write("La suma es: "+sol);

function operacion(numeros) {
    let sol=0;
    for (let i = 5; i < numeros.length; i++) {
        sol += numeros[i];
    }
    console.log(sol);
}

