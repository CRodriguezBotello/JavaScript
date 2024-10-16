'use strict'

let num1= Number(prompt("Primer numero"))
let num2= Number(prompt("Segundo numero"))
let num3= Number(prompt("Tercer numero"))

let mayor=num_mayor(num1,num2,num3)
document.write("El numero mayor es: "+mayor)
function num_mayor(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1
    }else{
        if (num2>num1 && num2>num3) {
            return num2
        } else {
            return num3
        }
    }
}