const prompt = require('prompt-sync')();

function capturaNotasEnsinoFundamental() {
    const notaDeMatematica = parseInt(prompt("Diga o valor da nota de matematica: "))
    const notaDePortugues = parseInt(prompt("Diga o valor da nota de portugues: "))
    const notaDeGeografia = parseInt(prompt("Diga o valor da nota de geografia: "))
    const notaDeHistoria = parseInt(prompt("Diga o valor da nota de história: "))
    const notaDeRedacao = parseInt(prompt("Diga o valor da nota de redação: "))
    const somaDasNotas = notaDePortugues + notaDeMatematica + notaDeHistoria + notaDeRedacao + notaDeGeografia
    return somaDasNotas 
}
function capturaNotasEnsinoMedio() {
    const notaDeQuimica = parseInt(prompt("Diga o valor da nota de quimica: "))
    const notaDeFisica = parseInt(prompt("Diga o valor da nota de fisica: "))
    const notaDeLiteratura = parseInt(prompt("Diga o valor da nota de literatura: "))
    const notaDeFilosofia = parseInt(prompt("Diga o valor da nota de filosofia: "))
    const notaDeBiologia = parseInt(prompt("Diga o valor da nota de biologia: "))
    const somaDasNotas = notaDeBiologia + notaDeFilosofia + notaDeLiteratura + notaDeFisica + notaDeQuimica
    return somaDasNotas
}
function capturaNotasEnsinoSuperior() {
  const notaDeProgramacao = parseInt(prompt("Diga o valor da nota de Programacao: "))
  const notaDeLegislacao = parseInt(prompt("Diga o valor da nota de Legislacao: "))
  const notaDeEducacaoFisica = parseInt(prompt("Diga o valor da nota de EducacaoFisica: "))
  const notaDeCalculoUm = parseInt(prompt("Diga o valor da nota de CalculoUm: "))
  const notaDeCalculoDois = parseInt(prompt("Diga o valor da nota de CalculoDois: "))
  const somaDasNotas = notaDeCalculoDois + notaDeCalculoUm + notaDeEducacaoFisica + notaDeLegislacao + notaDeProgramacao
  return somaDasNotas
}
function avaliaMediaAluno(media) {
    console.log("O valor da media aritmetica e: ", media)
    if (media <= 6) {
        console.log("Voce foi reprovado")
    } else if (media <=7) {
        console.log("Voce foi regular")
    } else {
        console.log("Bom trabalho")
    }
}

console.log ("Calculadora de Média")
const ehAlunoDoEnsinoFundamental = prompt("Digite 1, para Ensino Fundamental, 2, para Ensino Medio e 3 para Ensino Superior: ")
if (ehAlunoDoEnsinoFundamental == 1) {
  console.log(capturaNotasEnsinoFundamental() / 5 , )
 
} else if (ehAlunoDoEnsinoFundamental == 2) {
  console.log((capturaNotasEnsinoMedio() + capturaNotasEnsinoFundamental()) / 10)
} else {
 console.log((capturaNotasEnsinoSuperior() +capturaNotasEnsinoMedio() + capturaNotasEnsinoFundamental()) / 15)
}