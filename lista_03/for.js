const leia = require('readline-sync')

let numeros 
let par = 0
let impar = 0



for(let i = 0; i < 10; i++){
    numeros = leia.questionInt("Digite 10 numeros inteiros: ");
    if(numeros % 2 == 0){
        par++
    } else {
        impar++
    }
}

console.log("Par: " + par)
console.log("Impar: " + impar)

