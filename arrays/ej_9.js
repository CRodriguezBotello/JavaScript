'use strict';
let cuentas=[];
do{
    let numeroCuenta = Number(prompt("Introduce el número de la cuenta (negativo para terminar)"));
    if (numeroCuenta < 0) break; // Salir si el número de cuenta es negativo

    let nombreCliente = prompt("Introduce el nombre del cliente");
    let saldo = Number(prompt("Introduce el saldo de la cuenta"));

    // Guardamos la cuenta en un objeto
    let cuenta = {
        numeroCuenta: numeroCuenta,
        nombreCliente: nombreCliente,
        saldo: saldo
    };
    cuentas.push(cuenta);
}while(true);

operaciones(cuentas);

function operaciones(cuentas) {

    let total=0;

    for (let i = 0; i < cuentas.length; i++) {
        let cuenta= cuentas[i];
        document.write("Numero de la cuenta: "+cuenta.numeroCuenta+"<br/>");
        document.write("Nombre del cliente de la cuenta: "+cuenta.nombreCliente+"<br/>");
        
        if (cuenta.saldo>0) {
            document.write("El cliente es un acreedor<br/>");
            total+=cuenta.saldo;
        } else {
            if (cuenta.saldo<0) {
                document.write("El cliente es un deudor<br/>");
            } else {
                document.write("El cliente es nulo<br/>");
            }
        }
    }
    
    document.write("Total de los acreedores: "+total+"<br/>");
}