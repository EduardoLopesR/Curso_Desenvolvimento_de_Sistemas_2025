//função que defini oque será o imc e pega os valores da altura e peso para equação
function IMC() {
    const Resultado = document.getElementById('Resultado')
    const Altura = Number(document.getElementById('Altura').value)
    const Peso = Number(document.getElementById('Peso').value)

//Verificador impedir o calculo de imc quando o site iniciar e evitar o erro NaN(invalido)
    if (!Altura) {
        Resultado.innerHTML = 'Preencha peso e altura corretamente'
        return
    }
//so pra começar vazia a funçao
    let feedback = ''
//Faz o calculo do imc e muda a mensagem de feedback conforme os valores recebidos
    const imc = Peso / (Altura * Altura)
    if (imc <= 18.5) {
        feedback = 'Abaixo do peso'
    } else if (imc <= 25) {
        feedback = 'Peso normal'
    } else if (imc <= 30) {
        feedback = 'Sobrepeso'
    } else {
        feedback = 'Obeso'
    }
//resultado($ serve para validar a funçao)
    Resultado.innerHTML = `IMC: ${imc.toFixed(2)} (${feedback})`
}
