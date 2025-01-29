document.getElementById("Titulo").innerHTML="Meu primeiro texto <b>JavaScript<b>"; // Passa informações javascript para o html, pegando o Id do elemento e subscrevendo ele usando o innerHTML
console.log("Isso é um alerta no console"); // Apresenta informação no terminal.
alert("Isso é um alerta"); // Outra forma de apresentar informação na tela, uma caixa de alerta
alert(5 + 5)

// Entendo os operadores em JavaScript 

// São esses os operadores : + - * / = ++ -- += && || etc.. 

// Para verificar se é o VALOR é o mesmo.
var valor1, valor2
valor1 = 5;
valor2 = "5"; 
total = (valor1 == valor2) 
alert(total) // Vai dar true, pois o valor é mesmo, não é comparado o TIPO. 

//Para verificar se é o VALOR é o TIPO é o mesmo. 
valor1 = 5;
valor2 = "5";
total = (valor1 === valor2)
alert(total) // Vai dar false, pois o valor é mesmo, porém o TIPO é diferente.

valor1 = 5;
valor2 = "5";
total = (valor1 !== valor2)
alert(total) // Vai dar true, pois o valor é mesmo, porém o TIPO é diferente.


// Operador Ternário
var idade, eleitor;
idade = 18;
// Se nao for eleito faz a primeira condição, se não faz a segunda condição.
eleito = (idade < 18) ? "Não, é eleito" : "Sim, é eleitor";
alert("Resposta: " + eleito + " idade é de " + idade);
