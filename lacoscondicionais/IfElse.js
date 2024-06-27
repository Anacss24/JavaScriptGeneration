const leia = require("readline-sync")

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ")
idade = leia.questionInt("\nDigite sua idade: ")

if (idade >= 0 && idade <= 10) {
    console.log("\n no seu Plano de Saúde custará R$ 100,00 por mês.");
} else if (idade <= 29) {
    console.log("\n o seu Plano de Saúde custará R$200,00 por mês")
} else if (idade <= 45) {
    console.log("\n o seu Plano de Saúde custará R$300,00 por mês")
} else if (idade <= 59) {
    console.log("\n o seu Plano de Saúde custará R$400,00 por mês")
} else if (idade >= 60 && idade <= 65) {
    console.log("\n o seu Plano de Saúde custará R$500,00 por mês")
} else {
    console.log("\n o seu Plano de Saúde custará R$1000,00 por mês")
}

if(nome.toUpperCase() === 'ANA'){
    console.log(`Bem vindo ${nome}!`)
}