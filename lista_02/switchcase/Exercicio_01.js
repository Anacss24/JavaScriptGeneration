// Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

const leia = require("readline-sync")

let n1, n2, operacao, resultado;

n1 = leia.questionFloat("\n Digite o primeiro numero: ")
n2 = leia.questionFloat("\n Digite o segundo numero: ")


console.log("\n Operação")
console.log("\n 1 -- Soma ");
console.log("\n 2 -- Subtração ");
console.log("\n 3 -- Multiplicação");
console.log("\n 4 -- Divisão");

operacao = leia.questionInt("\n Digite a operacao:  ")

switch(operacao){
    case 1:
        resultado = n1 + n2;
       console.log(`O resultado de ${n1} + ${n2} é igual a: ${resultado}`)
    break;
    case 2:
        resultado = n1 - n2;
      console.log(`O resultado  de ${n1} - ${n2} é igual a: ${resultado}`)
    break;
    case 3:
        resultado = n1 * n2;
      console.log(`O resultado  de ${n1} X ${n2} é igual a: ${resultado}`)
    break;
    case 4:
        resultado = n1 / n2;
      console.log(`O resultado  de ${n1} / ${n2} é igual a: ${resultado}`)
    break;
    default:
        console.log("Operação Inválida!")
}