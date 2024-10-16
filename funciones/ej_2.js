'use strict'

let num1 = Number(prompt("Primer numero"))
let num2 = Number(prompt("Segundo numero"))
let num3 = Number(prompt("Tercer numero"))
mostrar_numeros(num1, num2, num3)

function mostrar_numeros(num1, num2, num3){
    document.write("Primer numero:"+num1+"<br/>")
    document.write("Segundo numero:"+num2+"<br/>")
    document.write("Tercer numero:"+num3+"<br/>")
}