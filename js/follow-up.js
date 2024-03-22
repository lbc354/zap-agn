const telFlwUp = document.querySelector("#tel-flw-up")
const leadFlwUp = document.querySelector("#lead-flw-up")
const btnFlwUp = document.querySelector("#btn-flw-up")



function enviarFollowUp() {
    var leadFlwUpMsgEstruturada = ""
    if (leadFlwUp.value != "") {
        leadFlwUpMsgEstruturada = `, ${leadFlwUp.value}`
    }
    var mensagem = `Olá${leadFlwUpMsgEstruturada}! Tudo bem?%0A%0AComo está sua disponibilidade para marcarmos nossa reunião?`
    var msg = `https://wa.me/55${telFlwUp.value}/?text=${mensagem}`
    window.open(msg, "_blank").focus()

    telFlwUp.value = ""
    leadFlwUp.value = ""
}



var numeroErradoFlwUp = false
function verificarNumeroFlwUp() {
    var telefone = telFlwUp.value.split('')
    for (var i = 0; i < telFlwUp.value.length; i++) {
        var onlyNumbers = /[0-9]/
        if (!onlyNumbers.test(telefone[i])) {
            numeroErradoFlwUp = true
            return
        }
    }
}



const telErroFlwUp = document.querySelector(".tel-erro-flw-up")
btnFlwUp.addEventListener('click', (e) => {
    e.preventDefault()
    verificarNumeroFlwUp()
    
    if (telFlwUp.value.length < 11 || numeroErradoFlwUp == true) {
        telErroFlwUp.innerHTML = "O número está incorreto"
        numeroErradoFlwUp = false
        return
    } else {
        telErroFlwUp.innerHTML = ""
    }

    enviarFollowUp()
})