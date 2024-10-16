'use strict'

let lado= Number(prompt("Lado del cuadrado"))

let sol=perimetro(lado)
document.write("El perímetro del cuadrado es de "+sol+" metros")

function perimetro(lado) {
    return lado*4
}