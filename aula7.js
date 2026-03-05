function adicao(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    const resultado = document.getElementById("resultado")

    if (num1 === 0 || num2 === 0) {
        resultado.innerHTML = "Preencha os números corretamente"
        return;
    }

    resultado.innerHTML = num1 + num2
    
}
function subtracao(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    const resultado = document.getElementById("resultado")

    if (num1 === 0 || num2 === 0) {
        resultado.innerHTML = "Preencha os números corretamente"
        return;
    }

    resultado.innerHTML = num1 - num2  
}
function divisao(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    const resultado = document.getElementById("resultado")

    if (num1 === 0 || num2 === 0) {
        resultado.innerHTML = "Preencha os números corretamente"
        return;
    }

    resultado.innerHTML = num1 / num2    
}
function multi(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    const resultado = document.getElementById("resultado")

    if (num1 === 0 || num2 === 0) {
        resultado.innerHTML = "Preencha os números corretamente"
        return;
    }

    resultado.innerHTML = num1 * num2  
}