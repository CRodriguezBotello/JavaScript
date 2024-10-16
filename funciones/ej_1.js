'use strict'
let num= Number(prompt("Introduce un primer numero"))
let num2= Number(prompt("Introduce un segundo numero"))
let num3= Number(prompt("Introduce un tercer numero"))

let menor=num_menor(num, num2, num3)
document.write("El numero mas bajo es: "+menor)

function num_menor(num, num2, num3) {
    if (num<=num2 && num<=num3) {
        let menor=num
        return menor
    }else{
        if (num2<=num && num2<=num3) {
            let menor=num2
            return menor
        }else{
            let menor=num3
            return menor
        }
    }
}
