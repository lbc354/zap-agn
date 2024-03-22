const telBarRest = document.querySelector("#tel-bares-rest")
const agenteBarRest = document.querySelector("#agente-bares-rest")
const leadBarRest = document.querySelector("#lead-bares-rest")
const btnBarRest = document.querySelector("#btn-bares-rest")



function enviarBaresRest() {
    var leadBaresRestMsgEstruturada = ""
    if (leadBarRest.value != "") {
        leadBaresRestMsgEstruturada = `, ${leadBarRest.value}`
    }

    var mensagem = `Olá${leadBaresRestMsgEstruturada}! Tudo bem?%0A%0AMe chamo ${agenteBarRest.value} e sou Agente Comercial da Projetos Consultoria Integrada, uma empresa que presta consultoria para bares e restaurantes.%0A%0ANo mercado atual, observamos dores principalmente relacionadas ao planejamento estratégico, e ao aumento do número de clientes. A partir disso, buscamos aumentar as vendas e a eficiência operacional.%0A%0APodemos marcar uma bate-papo, sem compromisso, para apresentar a Projetos e como funcionamos?`
    
    var msg = `https://wa.me/55${telBarRest.value}/?text=${mensagem}`
    
    window.open(msg, "_blank").focus()

    telBarRest.value = ""
    leadBarRest.value = ""
}



var numeroErradoBarRest = false
function verificarNumeroBarRest() {
    var telefone = telBarRest.value.split('')
    for (var i = 0; i < telBarRest.value.length; i++) {
        var onlyNumbers = /[0-9]/
        if (!onlyNumbers.test(telefone[i])) {
            numeroErradoBarRest = true
            return
        }
    }
}



const telErroBarRest = document.querySelector(".tel-erro-bar-rest")
const agenteErroBarRest = document.querySelector(".nome-erro-bar-rest")
btnBarRest.addEventListener('click', (e) => {
    e.preventDefault()
    verificarNumeroBarRest()

    if (telBarRest.value.length < 11 || numeroErradoBarRest == true) {
        telErroBarRest.innerHTML = "O número está incorreto"
        numeroErradoBarRest = false
        return
    } else {
        telErroBarRest.innerHTML = ""
    }
    if (agenteBarRest.value == "") {
        agenteErroBarRest.innerHTML = "Insira seu nome"
        return
    } else {
        agenteErroBarRest.innerHTML = ""
    }

    enviarBaresRest()
})