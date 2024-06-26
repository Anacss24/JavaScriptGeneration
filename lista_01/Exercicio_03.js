// Elabore um algoritmo que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador e exiba na tela o Salário Líquido.

const leia = require("readline-sync");

let salarioBruto = leia.questionFloat("Digite o salario bruto: ");
let adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ");
let horasExtras = leia.questionFloat("Digite as horas extras: ");
let descontos = leia.questionFloat("Digite os descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

console.log(`O salário líquido será de ${salarioLiquido.toFixed(2)}`)