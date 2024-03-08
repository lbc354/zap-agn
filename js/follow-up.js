//// enviando mensagem de follow-up
const zapFlwUp = document.querySelector("#zap-flw-up")
const leadFlwUp = document.querySelector("#lead-flw-up")
const btnFlwUp = document.querySelector("#btn-flw-up")
function enviarFollowUp() {
    // estrutura de mensagem para caso não se tenha/queira citar o nome do lead
    var leadFlwUpMsgEstruturada = ""
    if (leadFlwUp.value != "") {
        // estrutura de mensagem para citar o nome do lead
        leadFlwUpMsgEstruturada = `, ${leadFlwUp.value}`
    }
    // formando mensagem
    var mensagem = `Olá${leadFlwUpMsgEstruturada}! Tudo bem?%0A%0AComo está sua disponibilidade para marcarmos nossa reunião?`
    // url que vai ser aberta ao clicar no botão enviar
    var msg = `https://wa.me/55${zapFlwUp.value}/?text=${mensagem}`
    // assim abrimos a url em outra janela
    var janela = window.open(msg, "_blank")
    janela.focus()

    // resetando formulário
    zapFlwUp.value = ""
    leadFlwUp.value = ""
}



var numeroErradoFlwUp = false
function verificarNumeroFlwUp() {
    // split separa uma string em caracteres
    var telefone = zapFlwUp.value.split('')
    // percorre cada caractere da string
    for (var i = 0; i < zapFlwUp.value.length; i++) {
        var onlyNumbers = /[0-9]/
        // se o caractere for diferente de número
        if (!onlyNumbers.test(telefone[i])) {
            numeroErradoFlwUp = true
            return
        }
    }
}



const zapErroFlwUp = document.querySelector(".zap-erro-flw-up")
// definindo a função click no botão enviar
btnFlwUp.addEventListener('click', (e) => {
    // e.preventDefault()
    verificarNumeroFlwUp()
    
    if (zapFlwUp.value.length < 11 || numeroErradoFlwUp == true) {
        zapErroFlwUp.innerHTML = "O número está incorreto"
        numeroErradoFlwUp = false
        return
    } else {
        zapErroFlwUp.innerHTML = ""
    }

    enviarFollowUp()
})