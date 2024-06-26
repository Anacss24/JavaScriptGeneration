// Dado o Fluxograma, desenvolva o algoritmo

const leia = require("readline-sync");

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat("Digite o salario: ");
abono = leia.questionFloat("Digite o abono: ");
novoSalario = salario + abono;
console.log(`O seu novo Salário é de ${novoSalario.toFixed(2)}`)

