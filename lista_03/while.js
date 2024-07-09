const leia = require("readline-sync")

let idades
let menor21 = 0
let maior50  = 0

idades = leia.questionInt("Digite as idades: ")

while(idades > 0){
    idades = leia.questionInt("Digite as idades: ")
    if (idades < 21){56
        menor21++
    } else if (idades > 50){
        maior50++
    }
}

console.log("Total de pessoas menores de 21 anos: " + menor21)
console.log("Total de pessoas maiores de 50 anos: " + maior50)