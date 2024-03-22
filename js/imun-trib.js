const telImunTrib = document.querySelector("#tel-imun-trib")
const agenteImunTrib = document.querySelector("#agente-imun-trib")
const leadImunTrib = document.querySelector("#lead-imun-trib")
const ejImunTrib = document.querySelector("#ej-imun-trib")
const diaImunTrib = document.querySelector("#dia-imun-trib")
const horarioImunTrib = document.querySelector("#horario-imun-trib")
const btnImunTrib = document.querySelector("#btn-imun-trib")



function enviarImunTrib() {
    var leadImunTribMsgEstruturada = ""
    if (leadImunTrib.value != "") {
        leadImunTribMsgEstruturada = `, ${leadImunTrib.value}`
    }
    
    var ejImunTribMsgEstruturada = "vocês podem"
    if (ejImunTrib.value != "") {
        ejImunTribMsgEstruturada = `a ${ejImunTrib.value} pode`
    }
    
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

    var mensagem = `Olá${leadImunTribMsgEstruturada}! Tudo bem? Me chamo ${agenteImunTrib.value} e faço parte da Projetos Consultoria Integrada, empresa júnior de Brasília.%0A%0AVocê sabia que é possível nunca mais pagar o imposto ISS? Além disso, ${ejImunTribMsgEstruturada} receber a restituição dos últimos 5 anos do valor pago com correção monetária. Buscamos isso realizando uma ação de imunidade tributária, totalmente de acordo com a lei.%0A%0APodemos marcar uma reunião${reuniaoImunTribMsgEstruturada} para explicarmos um pouco melhor? Vou lhe enviar uma matéria falando um pouco sobre como a Projetos conseguiu ter êxito nesse processo.`

    var msg = `https://wa.me/55${telImunTrib.value}/?text=${mensagem}`
    
    window.open(msg, "_blank").focus()

    telImunTrib.value = ""
    leadImunTrib.value = ""
    ejImunTrib.value = ""
    diaImunTrib.value = ""
    horarioImunTrib.value = ""
}



var numeroErradoImunTrib = false
function verificarNumeroImunTrib() {
    var telefone = telImunTrib.value.split('')
    for (var i = 0; i < telImunTrib.value.length; i++) {
        var onlyNumbers = /[0-9]/
        if (!onlyNumbers.test(telefone[i])) {
            numeroErradoImunTrib = true
            return
        }
    }
}



const telErroImunTrib = document.querySelector(".tel-erro-imun-trib")
const agenteErroImunTrib = document.querySelector(".nome-erro-imun-trib")
btnImunTrib.addEventListener('click', (e) => {
    e.preventDefault()
    verificarNumeroImunTrib()

    if (telImunTrib.value.length < 11 || numeroErradoImunTrib == true) {
        telErroImunTrib.innerHTML = "O número está incorreto"
        numeroErradoImunTrib = false
        return
    } else {
        telErroImunTrib.innerHTML = ""
    }
    if (agenteImunTrib.value == "") {
        agenteErroImunTrib.innerHTML = "Insira seu nome"
        return
    } else {
        agenteErroImunTrib.innerHTML = ""
    }

    enviarImunTrib()
})



horarioImunTrib.addEventListener('keypress', () => {
    if (horarioImunTrib.value.length == 2) {
        horarioImunTrib.value += ':'
    }
})