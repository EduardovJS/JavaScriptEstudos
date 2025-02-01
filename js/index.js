//Arrays
const lista = ["espada, armadura"];

const lista2 = [];
lista2[0] = "espada";
lista2[1] = "armadura";

const lista3 = new Array("espada, armadura");

const pessoa1 = ["Eduardo", 21]; //Array
const pessoa = {nome:"Eduardo", idade:21}; // Object 

const pessoa3 = ["Eduardo", "Vinicius", "A", "B"];

// Método Join 
// Inclui elementos na virgula
// document.getElementById("pessoa3").innerHTML = pessoa3.join("**");

// Método Pop
// Remove o último item do array
// document.getElementById("pessoa3").innerHTML = pessoa3.pop();

// Método Shift
// Remove o primeiro item do array
// pessoa3.shift();

// Método Push
// Adiciona um elemento no array em último
// pessoa3.push("Jorge")

// Método Unshift
// Adiciona um elemento no começo do array
// pessoa3.unshift("Nome")

// Método Delete
// Remove o elemento conforme sua posição, deixa undefined, nao muda a posição dos elementos do array
// delete pessoa3[0]

// Método Splice 
// Indica quantos itens vão ser adicionados e quantos serão deletados se precisar. 
// 1 - Indique em qual posição o elemento será posicionado 
// 2 - Indique quantos elementos serão excluídos da posição informada
// pessoa3.splice(1, 0, "Adicionando 1", "Adicionado 2"); 

// Método Concat 
// Juntar dois arrays, sempre deve ser atribuído em novo array
// const juntandoArrays = pessoa3.concat(pessoa1);

// Método Slice
// Seleciona posições e remove a partir da posição, pode ser removido da posição 1 até 4, mesmo tendo um array com 10 posições
// pessoa3.slice(1, 4);
// pessoa3.slice(1);

// Método Short
// Mostra os itens em ordem afalbética
// alert(pessoa3.sort());
// Reverte a ordem afalbética 
// alert(pessoa3.reverse());
// Para mostrar números em ordem crescente, deve ser feito uma função 
// const numeros = [3, 4, 5, 10, 100, 21];
// alert(numeros.sort(function (a, b) { return a - b }));
// Para mostrar números em ordem decrescente, deve ser feito uma função 
// const numeros = [3, 4, 5, 10, 100, 21];
// alert(numeros.sort(function (a, b) { return b - a }));

// Função para pegar o maior número
// const numeros1 = [30, 10, 10000, 2, 1, 0];
// function MaiorNumero(array) {
    //return Math.max.apply(null, array);
// }
// alert(MaiorNumero(numeros1));

// Função para pegar o menor número
/*const numeros1 = [30, 10, 10000, 2, 1, 0];
function MenorNumero(array) {
    return Math.min.apply(null, array);
}
alert(MenorNumero(numeros1));
*/ 

// Função para filtragem de números 
/*
const numeros1 = [30, 10, 10000, 2, 1, 0];
function filtragem (value, index, array) {
    return value < 20;
}
alert(numeros1.filter(filtragem));
*/ 



