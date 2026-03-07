const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando em https://localhost:${PORT}`)
})


let usuarios = []

function salvarUsuario(){
    const cpf = document.getElementById("cpf").value
    const nome = document.getElementById("nome").value
    const nascimento = document.getElementById("nascimento").value
    const email = document.getElementById("email").value
    const indice = document.getElementById("indice").value
    const usuario = {
        cpf,
        nome,
        nascimento,
        email
    }

    if(indice === ""){
        usuarios.push(usuario)
    }else{
        usuarios[indice] = usuario
    }
    limparCampos()
}
function listarUsuarios(lista = usuarios){
    const tabela = document.getElementById("tabelaUsuarios")
    tabela.innerHTML = ""

    lista.forEach((u, index) => {
        tabela.innerHTML += `
        <tr>
            <td>${u.cpf}</td>
            <td>${u.nome}</td>
            <td>${u.nascimento}</td>
            <td>${u.email}</td>
            <td>
                <button onclick="editar(${index})">Editar</button>
                <button onclick="excluir(${index})">Excluir</button>
            </td>
        </tr>
        `
    })
}
function editar(index){
    const u = usuarios[index]

    document.getElementById("cpf").value = u.cpf
    document.getElementById("nome").value = u.nome
    document.getElementById("nascimento").value = u.nascimento
    document.getElementById("email").value = u.email
    document.getElementById("indice").value = index
}
function excluir(index){
    usuarios.splice(index,1)
    listarUsuarios()
}
function pesquisar(){
    const termo = document.getElementById("pesquisa").value.toLowerCase()
    const resultado = usuarios.filter(u =>
        u.nome.toLowerCase().includes(termo)
    )
    listarUsuarios(resultado)
}
function limparCampos(){
    document.getElementById("cpf").value=""
    document.getElementById("nome").value=""
    document.getElementById("nascimento").value=""
    document.getElementById("email").value=""
    document.getElementById("indice").value=""
}