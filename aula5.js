function CALCULO() {
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    let ad = document.getElementById('ad')
    let sub = document.getElementById('sub')
    let div = document.getElementById('div')
    let multi = document.getElementById('multi')
    let poten = document.getElementById('poten')
    const resultado = document.getElementById("resultado")

    if (num1 === 0 || num2 === 0) {
        resultado.innerHTML = "Preencha as números corretamente"
        return;
    }

//condições que irão ativar dependendo do tipo de operação q o usuário escolher
    if (ad.checked) {
        resultado.innerHTML = num1 + num2
    } else if (sub.checked) {
        resultado.innerHTML = num1 - num2
    } else if (div.checked) {
        resultado.innerHTML = num1 / num2
    } else if (multi.checked) {
        resultado.innerHTML = num1 * num2
    } else if (poten.checked) {
        resultado.innerHTML = num1 ** num2
    } else {
        resultado.innerHTML = "Escolha uma operação"
    }

}