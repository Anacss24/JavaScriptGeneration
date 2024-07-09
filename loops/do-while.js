const leia = require("readline-sync")

let numero, resultado, contador = 1;

do {
    numero = leia.questionInt("\n Digite um numero inteiro: ");
    resultado = numero * 5;

    console.log("\n O resultado da multiplicação é : " + resultado);
     
    contador ++
   
} while (contador < 3);

console.log(contador)
