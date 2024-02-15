// explicação desse bloco no prospectar.js
const zap_bares_rest = document.querySelector("#zap-bares-rest")
zap_bares_rest.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/
    const key = String.fromCharCode(e.keyCode)
    if (!onlyNumbers.test(key)) {
        e.preventDefault()
        return
    }
})



//// enviando mensagem de follow-up
const agente_bares_rest = document.querySelector("#agente-bares-rest")
const lead_bares_rest = document.querySelector("#lead-bares-rest")
const btn_bar_rest = document.querySelector("#btn-bares-rest")
function enviarBaresRest() {
    var lead_bares_rest_v = lead_bares_rest.value
    // estrutura de mensagem para caso não se tenha/queira citar o nome do lead
    var lead_bares_rest_nome = ""
    if (lead_bares_rest_v != "") {
        // estrutura de mensagem para citar o nome do lead
        lead_bares_rest_nome = `, ${lead_bares_rest_v}`
    }

    // formando mensagem
    var mensagem = `Olá${lead_bares_rest_nome}! Tudo bem?%0A%0AMe chamo ${agente_bares_rest.value} e sou Agente Comercial da Projetos Consultoria Integrada, uma empresa de Consultoria que busca auxiliar bares e restaurantes a aumentar o número de vendas e o número de clientes.%0A%0AConsegui seu contato pois verifiquei que seu CNPJ foi aberto recentemente e gostaríamos de marcar um bate-papo para entender como a empresa está funcionando atualmente e como podemos trabalhar juntos para trazer cada vez mais clientes.`
    // url que vai ser aberta ao clicar no botão enviar
    var msg = `https://wa.me/55${zap_bares_rest.value}/?text=${mensagem}`
    // assim abrimos a url em outra janela
    var janela = window.open(msg, "_blank")
    janela.focus()
}
// definindo a função click no botão enviar
btn_bar_rest.addEventListener('click', (e) => {
    // verifica se o campo de número de telefone não tem 11 caracteres
    if (zap_bares_rest.value.length != 11 || agente_bares_rest.value == "") {
        // assim não permitimos o envio do formulário
        e.preventDefault()
        return
    }
    enviarBaresRest()
})