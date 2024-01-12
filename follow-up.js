//// ativando e desativando modo follow-up
// lendo os ids dos 2 formulários e do botão de modo follow-up
const form_prospect = document.querySelector("#prospect")
const form_flw_up = document.querySelector("#follow-up")
const btn_follow_up = document.querySelector("#botao-follow-up")
// adicionando evento de clique no botão de modo follow-up
btn_follow_up.addEventListener("click", function () {
    // se o formulário de prospecção estiver ativo...
    if (form_prospect.style.display === "flex") {
        // ... desativamos ele...
        form_prospect.style.display = "none"
        // ... e ativamos o de follow-up
        form_flw_up.style.display = "flex"
        // aqui é só mudando a cor do botão
        btn_follow_up.style.backgroundColor = "rgba(0,255,0,.5)"
    }
    // senão, ou seja, se o formulário de prospecção estiver desativado...
    else {
        // desativamos o de follow-up...
        form_flw_up.style.display = "none"
        // ... e ativamos ele
        form_prospect.style.display = "flex"
        // mudando a cor do botão novamente
        btn_follow_up.style.backgroundColor = "silver"
    }
})



// explicação desse bloco no outro arquivo js
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
}
// definindo a função click no botão enviar
btn_flw_up.addEventListener('click', (e) => {
    // verifica se o campo de número de telefone não tem 11 caracteres
    if (zap_flw_up.value.length != 11) {
        // assim não permitimos o envio do formulário
        e.preventDefault()
        return
    }
    enviarFollowUp()
})