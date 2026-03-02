function Aleatorio(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a
}
// pegar pelo menos 10 numeros aleatorios
var numeros = []
    for(i =0; i < 10; i++){
        numeros.push(Aleatorio(1,100))
    }

// verificador de ordem crescente 
var crescente = [...numeros]
for (let i = 0; i < crescente.length; i++) {
  for (let j = 0; j < crescente.length - 1; j++) {
    if (crescente[j] > crescente[j + 1]) {
      let temp = crescente[j];
      crescente[j] = crescente[j + 1];
      crescente[j + 1] = temp;
    }
  }
}

// verificador de ordem decrescente(logica oposta da crescente )
var decrescente = [...crescente]
for (let i = 0; i < decrescente.length; i++) {
  for (let j = 0; j < crescente.length - 1; j++) {
    if (decrescente[j] < decrescente[j + 1]) {
      let temp = decrescente[j];
      decrescente[j] = decrescente[j + 1];
      decrescente[j + 1] = temp;
    }
  }
}

var par = []
var impar = []
var primo = []

function Primo(num){
    if (num <= 1) return false
    for (let i = 2; i < num; i++){
        if (num % i === 0) return false
    }
    return true
}
for (let num of numeros) {
  if (num % 2 === 0) {
    par.push(num)
  } else {
    impar.push(num)
  }

  if (Primo(num)) {
    primo.push(num)
  }
}
document.getElementById("resultado").innerHTML =`
    <p>Numeros: ${numeros}</p>
    <p>Crescente: ${crescente}</p>
    <p>Decrescente: ${decrescente}</p>
    <p>Par: ${par}</p>
    <p>Ímpar: ${impar}</p>
    <p>Primo: ${primo}</p>
`