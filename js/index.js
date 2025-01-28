document.getElementById("Titulo").innerHTML="Meu primeiro texto <b>JavaScript<b>"; // Passa informações javascript para o html, pegando o Id do elemento e subscrevendo ele usando o innerHTML
console.log("Isso é um alerta no console"); // Apresenta informação no terminal.
alert("Isso é um alerta"); // Outra forma de apresentar informação na tela, uma caixa de alerta
alert(5 + 5)

// Entendo os três tipos de variaveis no JavaScript

// -> var 
// -> let 
// -> const

//-> var
//Funciona como um var normal.
var coisa = "Teste String"  // 
var a = 2; 
var b = 3; 
var c = 3 + 5;
alert(c)

//-> let
//Não permite redeclaração de uma variavel, somente dentro de um bloco. 
//Se usa o let em vez de var geralmente. 
let pessoa = "Pessoa";
// let pessoa = "Pessoa1"; // Não permite
{
    let pessoa = "Pessoa3"; // A variavel mudou, pois está dentro de um bloco.
    alert(pessoa)
}



//-> const
//O valor da variável declarada sempre será o mesmo, não aceita mudanças.
//Quando uma variável precisa ter um valor que não pode ser mudado.
const x = 2;
