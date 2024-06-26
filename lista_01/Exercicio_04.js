// Elabore um algoritmo que leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre n1 e n2 pelo produto entre n3 e o n4.

const leia = require("readline-sync");

let numero1 = leia.questionInt("Digite o primeiro numero:");
let numero2 = leia.questionInt("Digite o segundo numero:");
let numero3 = leia.questionInt("Digite o terceiro numero:");
let numero4 = leia.questionInt("Digite o quarto numero:");

calculo = (numero1 * numero2) - (numero3 * numero4);

console.log(`A diferença entre os números é de ${calculo.toFixed(1)}`);
