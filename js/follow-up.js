// explicação desse bloco no outro prospectar.js
const zap_flw_up = document.querySelector("#zap-flw-up")
zap_flw_up.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/
    const key = String.fromCharCode(e.keyCode)
    if (!onlyNumbers.test(key)) {
        e.preventDefault()
        return
    }
})



//// enviando mensagem de follow-up
const lead_flw_up = document.querySelector("#lead-flw-up")
const btn_flw_up = document.querySelector("#btn-flw-up")
function enviarFollowUp() {
    var zap_flw_up_v = zap_flw_up.value
    var lead_flw_up_v = lead_flw_up.value
    // estrutura de mensagem para caso não se tenha/queira citar o nome do lead
    var lead_flw_up_nome = ""
    if (lead_flw_up_v != "") {
        // estrutura de mensagem para citar o nome do lead
        lead_flw_up_nome = `, ${lead_flw_up_v}`
    }
    // formando mensagem
    var mensagem = `Olá${lead_flw_up_nome}! Tudo bem?%0A%0AComo está sua disponibilidade para marcarmos nossa reunião?`
    // url que vai ser aberta ao clicar no botão enviar
    var msg = `https://wa.me/55${zap_flw_up_v}/?text=${mensagem}`
    // assim abrimos a url em outra janela
    var janela = window.open(msg, "_blank")
    janela.focus()

    zap_flw_up.value = ""
    lead_flw_up.value = ""
}



const zap_erro_flw_up = document.querySelector(".zap-erro-flw-up")
// definindo a função click no botão enviar
btn_flw_up.addEventListener('click', (e) => {
    e.preventDefault()

    if (zap_flw_up.value.length != 11) {
        zap_erro_flw_up.innerHTML = "O número está incorreto"
        return
    } else {
        zap_erro_flw_up.innerHTML = ""
    }

    enviarFollowUp()
})