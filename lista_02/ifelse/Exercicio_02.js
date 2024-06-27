//Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.

const leia = require("readline-sync");

let estruturaCorporal, classificacao, dieta;

estruturaCorporal = leia.question("\n Digite a estrutua corporal: Vertebrado ou Invertebrado: ");

classificacao = leia.question("\n Digite a sua classificacao: Ave, Mamifero, Inseto ou Anelideo: ");

dieta = leia.question("\n Digite a sua dieta: Carnivoro, Onivoro, Herbivoro ou Hematofago: ")


if (estruturaCorporal == "Vertebrado" && classificacao == "Ave") {
    if (dieta == "Carnivoro") {
        console.log("Águia")
    } else if (dieta == "Onivoro") {
        console.log("Pomba")
    } else {
        console.log("Dieta inválida")
    }

} else if (estruturaCorporal == "Vertebrado" && classificacao == "Mamifero") {
    if (dieta == "Herbivoro") {
        console.log("Vaca")
    } else if (dieta == "Onivoro") {
        console.log("Homem")
    } else {
        console.log("Dieta inválida")
    }
} else if (estruturaCorporal == "Invertebrado" && classificacao == "Inseto") {
    if (dieta == "Hematofago") {
        console.log("Pulga")
    } else if (dieta == "Herbivoro") {
        console.log("Lagarta")
    } else {
        console.log("Dieta inválida")
    }
} else if (estruturaCorporal == "Invertebrado" && classificacao == "Anelideo") {
    if (dieta == "Hematofago") {
        console.log("Sanguessuga")
    } else if (dieta == "Onivoro") {
        console.log("Minhoca")
    } else {
        console.log("Dieta inválida")
    }
}