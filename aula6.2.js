function enviar() {
    var produto = document.getElementById('produto')
    const novaDiv = document.createElement('div')

    novaDiv.textContent = produto.value
    document.getElementById('lista').appendChild(novaDiv)

    produto.value = ""
}

function excluir(){
    const lista = document.getElementById('lista')
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild)
    }
}