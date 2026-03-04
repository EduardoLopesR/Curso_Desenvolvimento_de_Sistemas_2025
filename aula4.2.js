let button = document.querySelector('#bnt-v')

let numero_secreto = Math.floor(Math.random() * 10) + 1;

let tentativas = 3;

let mensagem = document.querySelector('#msg')

// adiciona evento no click
button.addEventListener('click', () => {

    let texto = ''

    let numero = Number(document.getElementById('inp-num').value)
        
    if (numero == numero_secreto){
        texto = 'Parabéns você acertou! '
        button.remove()

    } else if (numero == '' || isNaN(numero)){
        texto = 'Coloque um número válido'

    } else if (numero > numero_secreto){
        texto = 'Muito alto'
        tentativas-- // Diminui uma tentativa

    } else {
        texto = 'Muito baixo'
        tentativas--
    }

    if (tentativas == 0) {
        texto = 'Você não tem mais tentativas'
        button.remove() 
    }
   
    tentativas == 0 
        ? texto = 'Suas tentativas acabaram. O número era ' + numero_secreto
        : texto = texto + ' — você tem ' + tentativas + ' tentativas restantes'

    mensagem.innerHTML = "<p>" + texto + '</p>'
})