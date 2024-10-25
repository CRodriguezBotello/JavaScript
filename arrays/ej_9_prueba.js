'use strict';

let cuentas = [];

function ingresarDatos(){
    while(true){

        let numeroCuenta = prompt("Introduce el número de cuenta o un valor negativo para finalizar");

        if(numeroCuenta < 0){
            break;
        }

        let nombre = prompt("Introduce el nombre del cliente");
        let saldoCuenta = prompt("Introduce el saldo de la cuenta");

        cuentas.push({
            numeroCuenta: numeroCuenta,
            nombre : nombre,
            saldoCuenta : saldoCuenta
        });

    }
}

function mostrarCuentas(){
    console.log("Datos de las cuentas de los clientes:");
    cuentas.forEach(cuenta => {
        console.log(`Número de cuenta: ${cuenta.numeroCuenta}, Nombre: ${cuenta.nombre}, Saldo: ${cuenta.saldoCuenta}`);
    });

}

function eresAcreedor(){
    let contadorAcreedores = 0;
    cuentas.forEach(cuenta => {
        if(cuenta.saldoCuenta > 0){
            console.log("El cliente " + cuenta.nombre + " es " + "ACREEDOR");
            contadorAcreedores++;
        }else if(cuenta.saldoCuenta < 0){
            console.log("El cliente " + cuenta.nombre + " es " + "DEUDOR");
        }else{
            console.log("El cliente " + cuenta.nombre + " es " + "NULO");
        }
    });

    console.log("---------------------------------------------------------");
    console.log("El numero total de acreedores es : " + contadorAcreedores);
    console.log("---------------------------------------------------------");
}


ingresarDatos();
//mostrarCuentas();
eresAcreedor();
