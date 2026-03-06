async function pesquisa() {
    try{

    const cep = document.getElementById("cep").value
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    if(!resposta.ok){
        throw new Error("CEP não encontrado")
    }
    const data = await resposta.json()
    const resultado = document.getElementById("resultado")

        resultado.innerText = `
        Rua: ${data.logradouro}
        Bairro: ${data.bairro}
        Cidade: ${data.localidade} - ${data.uf}`
    }
    catch(error){
        console.error(error)
    }
}