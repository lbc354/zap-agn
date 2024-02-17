//// enviando mensagem de follow-up
const zapBarRest = document.querySelector("#zap-bares-rest")
const agenteBarRest = document.querySelector("#agente-bares-rest")
const leadBarRest = document.querySelector("#lead-bares-rest")
const btnBarRest = document.querySelector("#btn-bares-rest")
function enviarBaresRest() {
    // estrutura de mensagem para caso não se tenha/queira citar o nome do lead
    var leadBaresRestMsgEstruturada = ""
    if (leadBarRest.value != "") {
        // estrutura de mensagem para citar o nome do lead
        leadBaresRestMsgEstruturada = `, ${leadBarRest.value}`
    }

    // formando mensagem
    var mensagem = `Olá${leadBaresRestMsgEstruturada}! Tudo bem?%0A%0AMe chamo ${agenteBarRest.value} e sou Agente Comercial da Projetos Consultoria Integrada, uma empresa de Consultoria que busca auxiliar bares e restaurantes a aumentar o número de vendas e o número de clientes.%0A%0AConsegui seu contato pois verifiquei que seu CNPJ foi aberto recentemente e gostaríamos de marcar um bate-papo para entender como a empresa está funcionando atualmente e como podemos trabalhar juntos para trazer cada vez mais clientes.`
    // url que vai ser aberta ao clicar no botão enviar
    var msg = `https://wa.me/55${zapBarRest.value}/?text=${mensagem}`
    // assim abrimos a url em outra janela
    var janela = window.open(msg, "_blank")
    janela.focus()

    zapBarRest.value = ""
    leadBarRest.value = ""
}



var numeroErradoBarRest = false
function verificarNumeroBarRest() {
    // split separa uma string em caracteres
    var telefone = zapBarRest.value.split('')
    // percorre cada caractere da string
    for (var i = 0; i < zapBarRest.value.length; i++) {
        var onlyNumbers = /[0-9]/
        // se o caractere for diferente de número
        if (!onlyNumbers.test(telefone[i])) {
            numeroErradoBarRest = true
            return
        }
    }
}



const zapErroBarRest = document.querySelector(".zap-erro-bar-rest")
const agenteErroBarRest = document.querySelector(".nome-erro-bar-rest")
// definindo a função click no botão enviar
btnBarRest.addEventListener('click', (e) => {
    verificarNumeroBarRest()

    if (zapBarRest.value.length < 11 || numeroErradoBarRest == true) {
        zapErroBarRest.innerHTML = "O número está incorreto"
        numeroErradoBarRest = false
        return
    } else {
        zapErroBarRest.innerHTML = ""
    }
    if (agenteBarRest.value == "") {
        agenteErroBarRest.innerHTML = "Insira seu nome"
        return
    } else {
        agenteErroBarRest.innerHTML = ""
    }

    enviarBaresRest()
})