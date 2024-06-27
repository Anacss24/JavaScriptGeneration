// Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

const leia = require("readline-sync");

let nomeColaborador, codigoCargoColaborador, salario, reajuste, novoSalario,cargo;

nomeColaborador = leia.question("\n Digite o nome do Colaborador: ");
salario = leia.questionFloat("\n Digite o salario do Colaborador: ");



console.log("\n Cargo")
console.log("\n 1 -- Gerente ");
console.log("\n 2 -- Vendedor ");
console.log("\n 3 -- Supervisor");
console.log("\n 4 -- Motorista");
console.log("\n 5 -- Estoquista");
console.log("\n 6 -- Técnico de TI");

codigoCargoColaborador = leia.questionInt("\n Digite o codigo de acordo com o seu cargo: ");

switch(codigoCargoColaborador){
    case 1:
        reajuste = 0.1
        novoSalario = salario + (reajuste * salario);
        cargo = "Gerente"
        console.log(`\n Nome do colaborador: ${nomeColaborador} \n Cargo: ${cargo} \n Salário: R$ ${novoSalario.toFixed(2)}`)
    break;
    case 2:
        reajuste = 0.07
        novoSalario = salario + (reajuste * salario);
        cargo = "Vendedor"
        console.log(`\n Nome do colaborador: ${nomeColaborador} \n Cargo: ${cargo} \n Salário: R$ ${novoSalario.toFixed(2)}`)
    break;
    case 3:
        reajuste = 0.09
        novoSalario = salario + (reajuste * salario);
        cargo = "Supervisor"
        console.log(`\n Nome do colaborador: ${nomeColaborador} \n Cargo: ${cargo} \n Salário: R$ ${novoSalario.toFixed(2)}`)
    break;
    case 4:
        reajuste = 0.06
        novoSalario = salario + (reajuste * salario);
        cargo = "Motorista"
        console.log(`\n Nome do colaborador: ${nomeColaborador} \n Cargo: ${cargo} \n Salário: R$ ${novoSalario.toFixed(2)}`)
    break;
    case 5:
        reajuste = 0.05
        novoSalario = salario + (reajuste * salario);
        cargo = "Estoquista"
        console.log(`\n Nome do colaborador: ${nomeColaborador} \n Cargo: ${cargo} \n Salário: R$ ${novoSalario.toFixed(2)}`)
    break;
    case 6:
        reajuste = 0.08
        novoSalario = salario + (reajuste * salario);
        cargo = "Técnico de TI"
        console.log(`\n Nome do colaborador: ${nomeColaborador} \n Cargo: ${cargo} \n Salário: R$ ${novoSalario.toFixed(2)}`)
    break;

}