const leia = require("readline-sync")

// let nome1, nome2, nome3;

// nome1 = leia.question("Digite o primeiro nome: ");
// console.log("Primeiro nome é: " + nome1);


// nome2 = leia.question("Digite o segundo nome: ");
// console.log("Primeiro nome é: " + nome2);


// nome3 = leia.question("Digite o segundo nome: ");
// console.log("Primeiro nome é: " + nome3);


// let nome;
// let i;

// for(i = 1; i < 4; i++){
//     nome = leia.question("Digite o nome: ");
//     console.log("O " + i + " nome digitado foi: " + nome);
// }

// Tabuada

let numero, contador;

numero = leia.questionInt("Calcule a tabuada do: ")

for(contador = 1; contador <= 10; contador++){
     resultado = numero * contador
     console.log(`${numero} x ${contador} = ${resultado}`)
}