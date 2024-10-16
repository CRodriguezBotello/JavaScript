'use strict';

let num=[];

for (let i = 0; i < 5; i++) {

    num[i]= Number(prompt("Introduce un numero"));
    
}

par_impar(num);

function par_impar(num) {
    
    let par=0;
    let impar=0;

    for (let i = 0; i < num.length; i++) {
        
        if(num[i]%2==0){

            par+=1;
        }else{
            impar+=1;
        }
    }

    document.write("Hay "+par+" pares<br/>");
    document.write("Hay "+impar+" impares");
}