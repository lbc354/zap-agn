//// enviando mensagem de imunidade tributária
const zapImunTrib = document.querySelector("#zap-imun-trib")
const agenteImunTrib = document.querySelector("#agente-imun-trib")
const leadImunTrib = document.querySelector("#lead-imun-trib")
const ejImunTrib = document.querySelector("#ej-imun-trib")
const diaImunTrib = document.querySelector("#dia-imun-trib")
const horarioImunTrib = document.querySelector("#horario-imun-trib")
const btnImunTrib = document.querySelector("#btn-imun-trib")
function enviarImunTrib() {
    // estrutura de mensagem para caso não se tenha/queira citar o nome do lead
    var leadImunTribMsgEstruturada = ""
    if (leadImunTrib.value != "") {
        leadImunTribMsgEstruturada = `, ${leadImunTrib.value}`
    }
    
    // estrutura de mensagem para caso não se tenha/queira citar o nome da ej
    var ejImunTribMsgEstruturada = "vocês podem"
    if (ejImunTrib.value != "") {
        ejImunTribMsgEstruturada = `a ${ejImunTrib.value} pode`
    }
    
    // estrutura de mensagem para caso não queira agendar reunião
    var reuniaoImunTribMsgEstruturada = ""
    var diaImunTribMsgEstruturada = ""
    var horaImunTribMsgEstruturada = ""
    if (diaImunTrib.value != "") {
        diaImunTribMsgEstruturada = ` no dia ${diaImunTrib.value}`
    }
    if (horarioImunTrib.value != "") {
        horaImunTribMsgEstruturada = ` às ${horarioImunTrib.value}h`
    }
    reuniaoImunTribMsgEstruturada = `${diaImunTribMsgEstruturada}${horaImunTribMsgEstruturada}`

    // formando mensagem
    var mensagem = `Olá${leadImunTribMsgEstruturada}! Tudo bem? Me chamo ${agenteImunTrib.value} e faço parte da Projetos Consultoria Integrada, empresa júnior de Brasília.%0A%0AVocê sabia que é possível nunca mais pagar o imposto ISS? Além disso, ${ejImunTribMsgEstruturada} receber a restituição dos últimos 5 anos do valor pago com correção monetária. Buscamos isso realizando uma ação de imunidade tributária, totalmente de acordo com a lei.%0A%0APodemos marcar uma reunião${reuniaoImunTribMsgEstruturada} para explicarmos um pouco melhor? Vou lhe enviar uma matéria falando um pouco sobre como a Projetos conseguiu ter êxito nesse processo.`

    // url que vai ser aberta ao clicar no botão enviar
    var msg = `https://wa.me/55${zapImunTrib.value}/?text=${mensagem}`
    // assim abrimos a url em outra janela
    window.open(msg, "_blank").focus()

    // resetando formulário menos o nome do agente
    zapImunTrib.value = ""
    leadImunTrib.value = ""
    ejImunTrib.value = ""
    diaImunTrib.value = ""
    horarioImunTrib.value = ""
}



var numeroErradoImunTrib = false
function verificarNumeroImunTrib() {
    // split separa uma string em caracteres
    var telefone = zapImunTrib.value.split('')
    // percorre cada caractere da string
    for (var i = 0; i < zapImunTrib.value.length; i++) {
        var onlyNumbers = /[0-9]/
        // se o caractere for diferente de número
        if (!onlyNumbers.test(telefone[i])) {
            numeroErradoImunTrib = true
            return
        }
    }
}



const zapErroImunTrib = document.querySelector(".zap-erro-imun-trib")
const agenteErroImunTrib = document.querySelector(".nome-erro-imun-trib")
// definindo a função click no botão enviar
btnImunTrib.addEventListener('click', (e) => {
    // e.preventDefault()
    verificarNumeroImunTrib()

    if (zapImunTrib.value.length < 11 || numeroErradoImunTrib == true) {
        zapErroImunTrib.innerHTML = "O número está incorreto"
        numeroErradoImunTrib = false
        return
    } else {
        zapErroImunTrib.innerHTML = ""
    }
    if (agenteImunTrib.value == "") {
        agenteErroImunTrib.innerHTML = "Insira seu nome"
        return
    } else {
        agenteErroImunTrib.innerHTML = ""
    }

    enviarImunTrib()
})



// aqui nós adicionamos automaticamente o : enquanto o usuário está digitando
horarioImunTrib.addEventListener('keypress', () => {
    if (horarioImunTrib.value.length === 2) {
        horarioImunTrib.value += ':'
    }
})