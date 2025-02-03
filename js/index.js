// EVENTOS DE TEMPO COM JAVASCRIPT

// Os eventos de tempo permitem a execução do código em intervalos de tempo especificados 

// setTimeout()
// --> Executa uma função, depois de esperar um número especificado em milisegundos.

// setInterval 
// --> É o mesmo que setTimeout(), mas repete a execução da função continuamente.

/*
function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    // ATIVA A FUNÇÃO UMA VEZ APÓS O TEMPO SER EXECUTADO. 
   tempo = setTimeout(function(){ 
        document.getElementById('tempo').innerHTML = "Executou o SetTimeout";
    }, 5000)
}

// Método para parar a contagem
function pararContagem() {
    clearTimeout(tempo)
    document.getElementById('tempo').innerHTML = "Parou a contagem";
}
*/


let tempo; // Variável global para armazenar o ID do setInterval

// Função para iniciar a contagem
function ativarContagem(){
    // Garantir que o valor inicial seja numérico
    let cronometro = parseInt(document.getElementById('tempo').innerHTML);
    
    // Inicia a contagem de tempo
    tempo = setInterval(function(){
        cronometro++; // Soma 1 ao cronômetro
        document.getElementById('tempo').innerHTML = cronometro; // Atualiza o HTML
    }, 1000);
}

// Função para parar a contagem
function pararContagem() {
    clearInterval(tempo); // Para o setInterval
    document.getElementById('tempo').innerHTML = "Parou a contagem"; // Exibe a mensagem
}
