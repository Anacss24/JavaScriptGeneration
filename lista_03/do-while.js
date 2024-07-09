const leia = require("readline-sync")

let numeros
let soma = 0;



do{

    numeros = leia.questionInt("Digite os numeros: ")

    if(numeros > 0){
        soma = soma + numeros
    }
    
} while(numeros != 0)

console.log("A soma dos números positivos é: " + soma)