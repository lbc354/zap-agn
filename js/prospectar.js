//// pegando o valor do serviço clicado
const spanServico = document.querySelector(".span-servico")
var servicoValue = ""
// passamos o nome do serviço como parâmetro
function servico(v) {
    if (servicoValue != v) {
        // se servicoValue estiver vazio ou seu valor é o nome de outro serviço, alteramos para o clicado
        servicoValue = v
        spanServico.innerHTML = servicoValue
    } else {
        // se o serviço foi clicado novamente, removemos seu valor, assim o usuário não precisa recarregar a página caso tenha clicado por engano
        servicoValue = ""
        spanServico.innerHTML = ""
    }
}



//// enviando mensagem de prospecção
// lendo id dos inputs
const zap = document.querySelector("#zap")
const agente = document.querySelector("#agente")
const lead = document.querySelector("#lead")
const genero = document.querySelector("#genero")
const treinee = document.querySelector("#treinee")
const btnProsp = document.querySelector("#btn-prospectar")

// função que vai ser chamada ao clicar no botão enviar
function enviarProspect() {
    // vamos construir nossas mensagens nestas variáveis
    var leadMsgEstruturada = ""
    var treineeMsgEstruturada = ""

    // verifica se foi passado o nome do treinee
    if (treinee.value != "") {
        // caso sim, esse texto será formado
        treineeMsgEstruturada = `${genero.value}${treinee.value} me passou seu contato mostrando interesse em fazer um projeto.%0A%0A`
    }

    // verifica se foi passado o serviço
    if (servicoValue != "") {
        // verifica se foi passado o nome do treinee novamente
        if (treinee.value != "") {
            // caso sim, iremos alterar a mensagem formada acima
            treineeMsgEstruturada = `${genero.value}${treinee.value} me passou seu contato mostrando interesse em fazer um projeto de ${servicoValue}, que é justamente um dos nossos carros chefes aqui na PCI.%0A%0A`
        }
        // caso não, esse texto será formado
        else {
            treineeMsgEstruturada = `Realizamos serviços de ${servicoValue}, e estamos entrando em contato para checar seu interesse nesse serviço. Somos referência nesse tipo de projeto e é um dos nossos carros chefes.%0A%0A`
        }
    }

    // verifica se foi passado o nome do lead
    if (lead.value != "") {
        // caso sim, iremos inserir seu nome na mensagem
        leadMsgEstruturada = `, ${lead.value}`
    }



    // formando e armazenando o texto final na variável mensagem
    // %0A é a maneira de escrever enter (quebra de linha) através de uma url
    var mensagem = `Olá${leadMsgEstruturada}! Tudo bem?%0A%0AMe chamo ${agente.value} e sou agente comercial da Projetos Consultoria Integrada (PCI). Atuamos há mais de 24 anos no mercado e somos uma empresa de consultoria.%0A%0A${treineeMsgEstruturada}Queria saber da possibilidade de marcarmos uma reunião de diagnóstico, sem compromisso, para entendermos melhor como podemos te ajudar!`
    // url que vai ser aberta ao clicar no botão enviar
    var msg = `https://wa.me/55${zap.value}/?text=${mensagem}`
    // assim abrimos a url em outra janela
    var janela = window.open(msg, "_blank")
    janela.focus()

    // reseta formulário menos o nome do agente
    zap.value = ""
    lead.value = ""
    genero.value = ""
    treinee.value = ""
    servico("")
}



var numeroErrado = false
function verificarNumero() {
    // split separa que uma string baseado em alguma coisa que definirmos, como coloquei sem espaço, estou dizendo que quero percorrer a string por cada caractere presente nela
    var telefone = zap.value.split('')
    var onlyNumbers = /[0-9]/
    for (var i = 0; i < zap.value.length; i++) {
        // se o caractere for diferente de número
        if (!onlyNumbers.test(telefone[i])) {
            numeroErrado = true
            return
        }
    }
}



const zapErro = document.querySelector(".zap-erro")
const agenteErro = document.querySelector(".nome-erro")
btnProsp.addEventListener('click', (e) => {
    // e.preventDefault()
    verificarNumero()
    
    if (zap.value.length < 11 || numeroErrado == true) {
        zapErro.innerHTML = "O número está incorreto"
        numeroErrado = false
        return
    } else {
        zapErro.innerHTML = ""
    }
    if (agente.value == "") {
        agenteErro.innerHTML = "Insira seu nome"
        return
    } else {
        agenteErro.innerHTML = ""
    }

    enviarProspect()
})