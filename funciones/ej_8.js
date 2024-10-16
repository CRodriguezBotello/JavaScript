'use strict';

let mes=Number(prompt("Introduce el numero del mes"));

let cuatri=cuatrimestre(mes);

document.write("Estamos en el "+cuatri);

function cuatrimestre(mes) {
    if (mes<5) {
        return 'Primer cuatrimestre';
    } else {
        if (mes>4 && mes<9) {
            return 'Segundo cuatrimestre';
        } else {
            return 'Tercer cuatrimestre';
        }
    }
}