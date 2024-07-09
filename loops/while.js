const leia = require("readline-sync")

let continua = true;

let n1, n2, resultado;

while(continua){
    n1 = leia.questionInt("Digite o primeiro numero: ");
    n2 = leia.questionInt("Digite o segundo numero: ");

    resultado = n1 + n2

    console.log("O resultado da soma é: " + resultado);
    console.log("\n *********MENU***************")
    continua = leia.keyInYNStrict("\n Deseja Continuar? ");
}