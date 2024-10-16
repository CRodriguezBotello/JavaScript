'use strict';

let num1=[];
let num2=[];

for (let i = 0; i < 3; i++) {

    num1[i]= Number(prompt("Introduce un numero en el primer array"));
    num2[i]= Number(prompt("Introduce un numero en el segundo array"));
    
}

listas(num1,num2);

function listas(num1, num2) {
    
    let total1=0;
    let total2=0;

    for (let i = 0; i < num1.length; i++) {
        
        total1+=num1[i];
        total2+=num2[i];
        
    }

    if (total1 < total2) {
        document.write("Lista 2 mayor");
    }else{
        if (total2 < total1) {
            document.write("Lista 1 mayor");
        } else {
            document.write("Lista iguales");
        }
    }
}