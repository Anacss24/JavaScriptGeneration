const leia = require("readline-sync")

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let numeroEncontrar, posicao

numeroEncontrar = leia.questionInt("Digite o numero que deseja encontrar: ")

 posicao = vetor.indexOf(numeroEncontrar)

if (posicao == -1){
    console.log(`O número ${numeroEncontrar} não foi encontrado!`)
}else {
    console.log(`O número ${numeroEncontrar} está localizado na posição: ${posicao}`)
}
