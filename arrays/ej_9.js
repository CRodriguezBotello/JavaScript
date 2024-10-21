'use strict';
let cuentas=[];
let total=0;
do{
    cuentas["numero"] = Number(prompt("Introduce el número de la cuenta (negativo para terminar)"));
    if (cuentas["numero"] < 0) break;

    cuentas["nombre"] = prompt("Introduce el nombre del cliente");
    cuentas["saldo"] = Number(prompt("Introduce el saldo de la cuenta"));

    total=operaciones(cuentas,total);
}while(true);

document.write("Total de los acreedores: "+total+"<br/>");


function operaciones(cuentas,total) {
    console.log("entro a la funcion");
    
    document.write("Numero de la cuenta: "+cuentas["numero"]+"<br/>");
    document.write("Nombre del cliente de la cuenta: "+cuentas["nombre"]+"<br/>");
        
    if (cuentas["saldo"]>0) {
        document.write("El cliente es un acreedor<br/>");
        total+=cuentas["saldo"];
    } else {
        if (cuentas["saldo"]<0) {
            document.write("El cliente es un deudor<br/>");
        } else {
            document.write("El cliente es nulo<br/>");
        }
    } 
    return total;
    
}