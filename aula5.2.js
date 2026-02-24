function Verificar() {
let cpfInput = document.getElementById('cpf').value
let cpfArray = cpfInput.split('').map(Number)
const resultado = document.getElementById('resultado')
let A = Number(cpfArray[0])
let B = Number(cpfArray[1])
let C = Number(cpfArray[2])
let D = Number(cpfArray[3])
let E = Number(cpfArray[4])
let F = Number(cpfArray[5])
let G = Number(cpfArray[6])
let H = Number(cpfArray[7])
let I = Number(cpfArray[8])
let J = Number(cpfArray[9])
let K = Number(cpfArray[10])

//Verificar se possui 11 digitos digitados
if (cpfArray.length !== 11) {
    resultado.innerHTML = 'CPF deve conter 11 dígitos'
    return
    }

const calculoJ = (A*10)+(B*9)+(C*8)+(D*7)+(E*6)+(F*5)+(G*4)+(H*3)+(I*2)
let restJ = calculoJ % 11
    if (restJ < 2){
        restJ = 0
    } else {
        restJ = 11 - restJ
    }

const calculoK = (restJ*11)+(A*10)+(B*9)+(C*8)+(D*7)+(E*6)+(F*5)+(G*4)+(H*3)+(I*2)
let restK = calculoK % 11

    if (restK < 2){
        restK = 0
    } else {
        restK = 11 - restK
    }

    if (J == restJ && K == restK) {
        resultado.innerHTML = 'CPF válido!'
    } else{
        resultado.innerHTML = 'CPF inválido!'
    }

}
