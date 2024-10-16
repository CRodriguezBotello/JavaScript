'use strict'

let anio= prompt("Introduce el año en que naciste")

while(parseInt(anio)>2024 || isNaN(anio)){
    anio= prompt("Por favor, introduce un año válido")
}

let edad= 2024 - parseInt(anio)

document.write("Tu edad es de "+edad+" años")
