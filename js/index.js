// JSON
// Converte objetos em texto ou textos em objetos.

// JSON.parse() -> Converte texto no padrão JSON em objetos.
// JSON.stringify() -> Converte objetos em textos padrão JSON.

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: "2001"
}
// Mostra o objeto, não mostra o conteudo
document.getElementById('area').innerHTML = carro;

// Mostra o conteudo do objeto
let texto = JSON.stringify(carro);
document.getElementById('area1').innerHTML = texto;
// Converte para objeto
let obj = JSON.parse(texto)
console.log(obj.modelo)
