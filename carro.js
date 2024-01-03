const prompt = require('prompt-sync')();
//CARRO v1
//100 interagir com o carro

//velocidade 10 em 10 km ( de acordo com a marcha)
//marchaAtual -1 ré, 0 neturo, 1 - 5
//estaLigado true / false

//1 - ligar o carro (tem que estar desligado)
//2 - acelerar o carro (tem que estar ligado e a marcha == -1 ou > 1)
//3 - Marcha + (tem que estar ligado, e marcha menor que 5)
//4 - Marcha - (tem que estar ligado, e marcha maior que -1)
//5 - Desligar Carro (tem que estar ligado, tem que estar parado e na marcha 0)
//6 - freiar o carro
// COMO FUNCIONA UM FOR
//for(let contador = 0; contador < numeroDeExecucoes; contador = contador + 1) {}
function ligarCarro() {
    if (carroLigado == false) {
       
        carroLigado = true
    }
}
function desligarCarro() {
    if (carroLigado == true) {
        carroLigado = false
    }
}

function aumentarMarcha() {
    if (marcha < 5) {
        if (carroLigado == true) {
            marcha = marcha + 1
        }
    }
}
function reduzirMarcha() {
    if (marcha > 0) {
        marcha = marcha - 1
    }
}
function acelerar() {
    if (carroLigado == true) {
        if (marcha > 0) {
            velocidade = velocidade + marcha * 10
        }
    }
}
function frear() {
    if (velocidade > 0) {
        velocidade = velocidade - 5
    }
}

let velocidade = 0
let carroLigado = false
let marcha = 0
const repeticoes = parseInt(prompt("escolha o numero de repeticoes:"))
for(let contador = 0; contador < repeticoes; contador = contador + 1 ){
    const opcaoUsuario = parseInt(prompt("escolha uma opcao:"))
if (opcaoUsuario == 1) {
    ligarCarro()
} else if (opcaoUsuario == 2) {
    desligarCarro()
} else if (opcaoUsuario == 3) {
    aumentarMarcha()
} else if (opcaoUsuario == 4 ){
    reduzirMarcha()
}  else if (opcaoUsuario == 5) {
    acelerar()
}  else if (opcaoUsuario == 6) {
    frear()
} 
console.log(carroLigado)
console.log(velocidade)
console.log(marcha)
}