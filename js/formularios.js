//// nesse arquivo, controlamos os formulários que aparecem ao clicar nos botões de formulário

// lendo os ids dos formulários e dos botões
const form_prospect = document.querySelector("#prospect")

const form_flw_up = document.querySelector("#follow-up")
const btn_follow_up = document.querySelector("#botao-follow-up")

const form_bares_rest = document.querySelector("#bares-restaurantes")
const btn_bares_rest = document.querySelector("#botao-bares-rest")

const form_imun_trib = document.querySelector("#imunidade-tributaria")
const btn_imun_trib = document.querySelector("#botao-imun-trib")

// adicionando evento de clique no botão follow-up
btn_follow_up.addEventListener("click", function () {
    // se outro fromulário estiver ativo...
    if (form_prospect.style.display === "flex" || form_bares_rest.style.display === "flex" || form_imun_trib === "flex") {
        // ... desativamos eles...
        form_prospect.style.display = "none"
        form_bares_rest.style.display = "none"
        form_imun_trib.style.display = "none"
        // ... e ativamos o de follow-up
        form_flw_up.style.display = "flex"
        // aqui é só mudando a cor dos botões
        btn_follow_up.style.backgroundColor = "rgba(0,255,0,.5)"
        btn_bares_rest.style.backgroundColor = "silver"
        btn_imun_trib.style.backgroundColor = "silver"
    }
    // senão, ou seja, se o formulário de follow-up estiver ativado...
    else {
        // desativamos ele...
        form_flw_up.style.display = "none"
        // ... desativamos os outros...
        form_bares_rest.style.display = "none"
        form_imun_trib.style.display = "none"
        // ... e ativamos o de prospecção
        form_prospect.style.display = "flex"
        // mudando a cor dos botões novamente
        btn_follow_up.style.backgroundColor = "silver"
        btn_bares_rest.style.backgroundColor = "silver"
        btn_imun_trib.style.backgroundColor = "silver"
    }
})

// agora fazemos a mesma coisa com os outros botões
btn_bares_rest.addEventListener("click", function () {
    if (form_prospect.style.display === "flex" || form_flw_up.style.display === "flex" || form_imun_trib.style.display === "flex") {
        // desativa os outros forms
        form_prospect.style.display = "none"
        form_flw_up.style.display = "none"
        form_imun_trib.style.display = "none"
        // ativa o de bares e restaurantes
        form_bares_rest.style.display = "flex"
        // muda a cor dos botões
        btn_bares_rest.style.backgroundColor = "rgba(0,255,0,.5)"
        btn_follow_up.style.backgroundColor = "silver"
        btn_imun_trib.style.backgroundColor = "silver"
    }
    else {
        // clicando novamente, ativa o de prospecção
        form_bares_rest.style.display = "none"
        form_flw_up.style.display = "none"
        form_imun_trib.style.display = "none"
        form_prospect.style.display = "flex"
        // muda a cor dos botões
        btn_follow_up.style.backgroundColor = "silver"
        btn_bares_rest.style.backgroundColor = "silver"
        btn_imun_trib.style.backgroundColor = "silver"
    }
})

// imunidade tributária
btn_imun_trib.addEventListener("click", function () {
    if (form_prospect.style.display === "flex" || form_flw_up.style.display === "flex" || form_bares_rest.style.display === "flex") {
        // desativa os outros forms
        form_prospect.style.display = "none"
        form_flw_up.style.display = "none"
        form_bares_rest.style.display = "none"
        // ativa o de imunidade tributária
        form_imun_trib.style.display = "flex"
        // muda a cor
        btn_imun_trib.style.backgroundColor = "rgba(0,255,0,.5)"
        btn_follow_up.style.backgroundColor = "silver"
        btn_bares_rest.style.backgroundColor = "silver"
    }
    else {
        // clicando novamente, ativa o de prospecção
        form_bares_rest.style.display = "none"
        form_flw_up.style.display = "none"
        form_imun_trib.style.display = "none"
        form_prospect.style.display = "flex"
        // muda a cor dos botões
        btn_follow_up.style.backgroundColor = "silver"
        btn_bares_rest.style.backgroundColor = "silver"
        btn_imun_trib.style.backgroundColor = "silver"
    }
})