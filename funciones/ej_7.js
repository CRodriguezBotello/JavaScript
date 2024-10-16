'use strict';

let num1= Number(prompt("Introduce el primer numero"));
let num2= Number(prompt("Introduce el segundo numero"));
let num3= Number(prompt("Introduce el tercer numero"));
let num4= Number(prompt("Introduce el cuarto numero"));
let num5= Number(prompt("Introduce el quinto numero"));

let sol=suma(num1,num2,num3,num4,num5);
document.write(num1+" + "+num2+" + "+num3+" + "+num4+" + "+num5+"<br/>");
document.write("La solucion de la suma es: "+sol);

function suma(num1,num2,num3,num4,num5) {
    return num1+num2+num3+num4+num5;
}