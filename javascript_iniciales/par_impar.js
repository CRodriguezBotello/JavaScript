'use strict'

let num=prompt("Introduce un numero")

while(isNaN(num)){
    num=prompt("Por favor, introduce un numero")
}

if(num%2==0){
    document.write("El numero es par")
}else{
    document.write("El numero es impar")
}