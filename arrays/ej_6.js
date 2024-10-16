'use strict';

let sueldo=[];

for (let i = 0; i < 8; i++) {

    do{

        sueldo[i]= Number(prompt("Introduce un sueldo"));

    }while(sueldo[i]<100 || sueldo[i]>500);
    
    
}

empleados(sueldo);

function empleados(sueldo) {
    let pobres=0;
    let ricos=0;
    let total=0;
    for (let i = 0; i < sueldo.length; i++) {
        
        total+=sueldo[i];

        if (sueldo[i]>=100 && sueldo[i]<=300) {
            
            pobres+=1;

        }else{
            ricos+=1;
        }
        
    }

    document.write(pobres+" empleados cobran entre 100 y 300<br/>");
    document.write(ricos+" empleados cobran mas de 300<br/>");
    document.write("La empresa debe emplear "+total+" euros para pagar a sus empleados");
}