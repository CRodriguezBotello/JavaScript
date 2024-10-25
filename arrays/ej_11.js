'use strict';

let numeros=[];

for (let i = 0; i < 10; i++) {

    numeros[i]= Number(prompt("Introduce el numero "+(i+1)));
    
}

operaciones();

function operaciones() {
    
    let negativo=0;
    let positivo=0;
    let multiplo=0;
    let pares=0;

    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]<0){

            negativo+=1;

        }else{

            positivo+=1;

        }

        if (numeros[i]%15===0) {
            
            multiplo+=1;

        }

        if (numeros[i]%2===0) {
            pares+=numeros[i];
        }
        
    }

    document.write("Hay "+negativo+" numeros negativos<br/><br/>");
    document.write("Hay "+positivo+" numeros positivos<br/><br/>");
    document.write(`${multiplo} numeros son multiplos de 15<br/><br/>`);
    document.write(`Todos los numeros pares suman en total ${pares}`);
    console.log(numeros);

}