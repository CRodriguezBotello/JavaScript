'use strict';

let altura=[];

for (let i = 0; i < 5; i++) {
    
    altura[i]= Number(prompt("Intrudoce la altura del la persona "+(i+1)));
    
    
}

let medias=media(altura);
document.write("La media de las alturas es de: "+medias);

function media(altura) {
    
    let alturas=0;
    for (let i = 0; i < altura.length; i++) {

        alturas+=altura[i];
        console.log(alturas);
        
    }

    return alturas/5;
}