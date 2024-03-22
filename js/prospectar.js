const spanServico = document.querySelector(".span-servico")
var servicoValue = ""
function servico(s) {
    if (servicoValue != s) {
        servicoValue = s
        spanServico.innerHTML = servicoValue
    } else {
        servicoValue = ""
        spanServico.innerHTML = ""
    }
}



const tel = document.querySelector("#tel")
const agente = document.querySelector("#agente")
const lead = document.querySelector("#lead")
const genero = document.querySelector("#genero")
const treinee = document.querySelector("#treinee")
const btnProsp = document.querySelector("#btn-prospectar")

function enviarProspect() {
    // vamos construir nossas mensagens nestas variáveis
    var msgEstruturada = ""
    var leadMsgEstruturada = ""

    if (treinee.value != "") {
        msgEstruturada = `${genero.value}${treinee.value} me passou seu contato mostrando interesse em fazer um projeto.%0A%0A`
    }

    if (servicoValue != "") {
        if (treinee.value != "") {
            msgEstruturada = `${genero.value}${treinee.value} me passou seu contato mostrando interesse em fazer um projeto de ${servicoValue}, que é justamente um dos nossos carros chefes.%0A%0A`
        }
        else {
            msgEstruturada = `Realizamos serviços de ${servicoValue}, e estamos entrando em contato para checar seu interesse nesse serviço. Somos referência nesse tipo de projeto e é um dos nossos carros chefes.%0A%0A`
        }
    }

    if (lead.value != "") {
        leadMsgEstruturada = `, ${lead.value}`
    }



    // %0A é a maneira de escrever enter (quebra de linha) através de uma url
    var mensagem = `Olá${leadMsgEstruturada}! Tudo bem?%0A%0AMe chamo ${agente.value} e sou agente comercial da Projetos Consultoria Integrada (PCI). Atuamos há mais de 24 anos no mercado e somos uma empresa de consultoria.%0A%0A${msgEstruturada}Queria saber da possibilidade de marcarmos uma reunião de diagnóstico, sem compromisso, para entendermos melhor como podemos te ajudar!`
    
    var msg = `https://wa.me/55${tel.value}/?text=${mensagem}`
    
    window.open(msg, "_blank").focus()

    tel.value = ""
    lead.value = ""
    genero.value = ""
    treinee.value = ""
    servico("")
}



var numeroErrado = false
function verificarInputDeNumero() {
    var phone = tel.value.split('')
    var onlyNumbers = /[0-9]/
    for (var i = 0; i < phone.length; i++) {
        if (!onlyNumbers.test(phone[i])) {
            numeroErrado = true
            return
        }
    }
}



const telErro = document.querySelector(".tel-erro")
const agenteErro = document.querySelector(".nome-erro")
btnProsp.addEventListener('click', (e) => {
    e.preventDefault()
    verificarInputDeNumero()
    
    if (tel.value.length < 11 || numeroErrado == true) {
        telErro.innerHTML = "O número está incorreto"
        numeroErrado = false
        return
    } else {
        telErro.innerHTML = ""
    }
    if (agente.value == "") {
        agenteErro.innerHTML = "Insira seu nome"
        return
    } else {
        agenteErro.innerHTML = ""
    }

    enviarProspect()
})