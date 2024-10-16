'use strict'

let num = Number(prompt("Introduce un numero"));
let largo = longitud(num);
document.write("El numero tiene "+largo+" digitos");

function longitud(num) {
    if(num<0){
        num=num*(-1);
    }
    return num.toString().length;
}