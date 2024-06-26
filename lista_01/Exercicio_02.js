// Elabore um algoritmo que leia 4 notas (números reais) de um participante e exiba na tela a média final do participante.

const leia = require("readline-sync")

let nota1;
let nota2;
let nota3;
let nota4;


nota1 = leia.questionFloat("Digite a primeira nota: ")
nota2 = leia.questionFloat("Digite a segunda nota: ")
nota3 = leia.questionFloat("Digite a terceira nota: ")
nota4 = leia.questionFloat("Digite a quarta nota: ")

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A média do aluno é ${media.toFixed(1)}`)