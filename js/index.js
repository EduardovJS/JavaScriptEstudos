document.getElementById("Titulo").innerHTML="Meu primeiro texto <b>JavaScript<b>"; // Passa informações javascript para o html, pegando o Id do elemento e subscrevendo ele usando o innerHTML
console.log("Isso é um alerta no console"); // Apresenta informação no terminal.
alert("Isso é um alerta"); // Outra forma de apresentar informação na tela, uma caixa de alerta
alert(5 + 5)


// Funções 
function soma (valor1, valor2) {
    return valor1 + valor2;
}
document.getElementById("texto").innerHTML = soma(10,20);

//Obejtos 
//São variáveis com muitos valores dentros
//Ex: const carro = {marca: "ford", modelo: "ka", ano 2015}
//Valores dentro do objeto são chamados de propriedades. 
//Objetos também podem ter metódos. Um metódo é uma função colacada dentro de uma propriedade. 

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: "2015",
    completo : function(){
        return "A marca é " + this.marca + " e o modelo: " + this.modelo;
    }
}
alert(carro.ano);
alert(carro.completo());
