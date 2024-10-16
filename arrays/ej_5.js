'use strict';

let numeros=[];

for (let i = 0; i < 8; i++) {
    
    numeros[i]= Number(prompt("Introduce un numero"));
    
}

operaciones(numeros);

function operaciones(numeros){
    let total=0;
    let totalmayor36=0;
    let mayor50=0;

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
        console.log(total);

        if (numeros[i]>=36) {
            
            totalmayor36+=numeros[i];
            console.log(totalmayor36);
        }
        
        if (numeros[i]>=50) {
            
            mayor50+=1;
            console.log(mayor50);
        }
    }

    document.write("total de los numeros: "+total+"<br/>");
    document.write("total de los numeros mayores a 36: "+totalmayor36+"<br/>");
    document.write("Numeros mayores a 50: "+mayor50+"<br/>");
}