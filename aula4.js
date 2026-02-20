//captura dos valores
function MEDIA() {
    const nota1 = Number(document.getElementById("nota1").value)
    const nota2 = Number(document.getElementById("nota2").value)
    const resultado = document.getElementById("resultado")

//evitar erro no começo do código e validar as notas inseridas
    if (nota1 === 0 || nota2 === 0) {
        resultado.innerHTML = "Preencha as notas corretamente"
        return
    }

    const media = (nota1 + nota2) / 2
    let recupera = ""
    
//mensagem solicitada para demonstrar a situação da nota do aluno
    if (media <= 4.5) {
        recupera = "Aluno Reprovado"
    } else if (media <= 6.5) {
        recupera = "Aluno em Recuperação"
    } else if (media <= 10) {
        recupera = "Aluno Aprovado"
    } else {
        recupera = "Valores inseridos acima do permitido"
    }

    resultado.innerHTML = `Média: ${media.toFixed(2)} - ${recupera}`
}