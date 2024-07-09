// let vetoresInteiros = [10, 15, 70, 140]

// let vetorString = [
//     "Boxer",
//     "Pastor Alemão",
//     "Pinscher",
//     "Husky Siberiano",
//     "Corgi"
// ];

// console.log("1° elemento da lista: " + vetorString[0]);
// console.log("2° elemento da lista: " + vetorString[1]);
// console.log("3° elemento da lista: " + vetorString[2]);
// console.log("4° elemento da lista: " + vetorString[3]);
// console.log("5° elemento da lista: " + vetorString[4]);

// Exibir vetores com laço de repetição 

// for(let i = 0; i < vetorString.length; i++ ){
//     console.log( `${i + 1}° elemento: ${vetorString[i]}`)
// }

// // Inserindo dados no vetor vazio 

// const leia = require("readline-sync")

// let vetor = new Array(5)

// for(i = 0; i < 5; i++){
//     vetor[i] = leia.questionInt(`Digite o numero ${i+1}: `);
// }

// console.log("\n Os números digitados foram: \n");

// for(i = 0; i < 5; i++){
//     console.log(`${i + 1}° número: ${vetor[i]}`);
// }

// Métodos da Classe Arrays 

//sort(array) Ordena os elementos de um Array em ordem crescente

let nomes = ["Samantha", "Amanda", "Vinicius", "Cauê", "Leonardo"];

nomes.sort();
console.log("***********SORT********")
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}



//reverse(array) Inverte  a ordenação  dos elementos de um Array

nomes.reverse();
console.log("\n********REVERSE*******")
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

//indexOf(elemento) Pesquisa o elemento especificado e retorna o indice da sua primeira ocorrência em um Array unidimensional (vetor)

let ns = [3, 2, 1, 6, 5, 10, 7, 8, 9]

console.log("Elemento 7 está no indice : " + ns.indexOf(7))