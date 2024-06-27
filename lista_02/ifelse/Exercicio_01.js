// Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue.

const leia = require("readline-sync");

let nome, idade, primeiraDoacao;

nome = leia.question("\n Digite o seu nome: ");
idade = leia.questionInt ("\n Digite a sua idade: ");

primeiraDoacao = leia.question("\n E sua primeira doacao de sangue: 1- SIM 2- NAO ") 

if (idade >= 18 && idade <= 59){
    console.log(`\n ${nome} está Apto para doar sangue`)
}else if(idade >= 60 && idade <= 69 && primeiraDoacao == 2){
    console.log(`\n ${nome} está Apto para doar sangue`)
}else{
    console.log(`\n ${nome} não está Apto para doar sangue`)
}

 
 