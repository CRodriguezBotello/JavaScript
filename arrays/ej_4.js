'use strict';

let num1=[];
let num2=[];
for (let i = 0; i < 5; i++) {
    
    num1[i]= Number(prompt("Intrudoce el numero del primer array "));
    num2[i]= Number(prompt("Intrudoce el numero del segundo array "));
}
suma(num1, num2);

function suma(num1, num2){

    let sol=[];

    for (let i = 0; i < 5; i++) {

        sol[i]=num1[i]+num2[i];
        document.write("solucion["+i+"] = "+sol[i]+"<br/>");
    }

    
}