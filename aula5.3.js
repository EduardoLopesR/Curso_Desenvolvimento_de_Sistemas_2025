let produtos = []

function lista() {
    let nome = document.getElementById('nome').value;
    let qntd = document.getElementById('qntd').value;
    let valor = document.getElementById('valor').value;
    const resultado = document.getElementById('resultado')

    if (!nome || !qntd || !valor) {
        resultado.innerHTML = 'Preencha todos os campos.'
        return
    }
    const produto = {
        nome: nome,
        quantidade: Number(qntd),
        valor: Number(valor)
    }
    produtos.push(produto)
    resultado.innerHTML = ""

    produtos.forEach(function(p) {
        resultado.innerHTML += `  
                <li>      
                Produto: ${p.nome} /
                Quantidade: ${p.quantidade} /
                Valor: R$ ${p.valor.toFixed(2)}
                </li>
        `
    })
}