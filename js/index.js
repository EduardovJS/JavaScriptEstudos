class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);

console.log(uno);
console.log(gol);

// pega a data completa
let data = new Date();
console.log(data);

// pega o ano completo
let ano = data.getFullYear(); 
console.log(ano);

// pega o mês atual - de 0 até 11 sendo 0 janeiro e 11 dezembro
let mes = data.getMonth();
console.log(mes);

// pega o dia do mês - 1 até 31 
let diaMes = data.getDate();
console.log(diaMes);

// pega o dia da semana - 1 até 6
let diaSemana = data.getDay();
console.log(diaSemana);

// pega as horas de - 0 até 23
let hora = data.getHours();
console.log(hora);

// pega as horas de - 0 até 59
let minutos = data.getMinutes();
console.log(minutos);

// pega segundos - 0 até 59
let segundos = data.getSeconds();
console.log(segundos);

// pega milisegundos = 0 até 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// pega a data do padrão brasileiro - dia/mes/ano
let dataBR = data.toLocaleDateString('pt-BR');
console.log(dataBR);

// Comparar datas - maior ou menor 

var hoje = new Date();
var vencimento = new Date(2025, 2, 7);

if(hoje > vencimento){
    console.log("Sua conta está vencida");
} else{
    console.log("Ainda não venceu");
}

// Diferença entre duas datas em dias 
var dataInicial = new Date();
var dataFinal = new Date(2025, 2, 11);
// milisegundos
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
// converte para dias
var diferencaDias = Math.ceil(diferencaTempo / (24*60*60*1000));

console.log(diferencaDias + " dias");


