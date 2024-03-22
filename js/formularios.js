// lendo os ids dos formulários e dos botões
const form_prospect = document.querySelector("#prospect")

const form_flw_up = document.querySelector("#follow-up")
const btn_follow_up = document.querySelector("#botao-follow-up")

const form_bares_rest = document.querySelector("#bares-restaurantes")
const btn_bares_rest = document.querySelector("#botao-bares-rest")

const form_imun_trib = document.querySelector("#imunidade-tributaria")
const btn_imun_trib = document.querySelector("#botao-imun-trib")



// ativando e desativando formulário de follow-up
btn_follow_up.addEventListener("click", function () {
    if (form_flw_up.style.display == "none") {
        form_prospect.style.display = "none"
        form_bares_rest.style.display = "none"
        form_imun_trib.style.display = "none"
        
        form_flw_up.style.display = "flex"
        
        btn_follow_up.style.backgroundColor = "rgba(0,255,0,.5)"
        btn_bares_rest.style.backgroundColor = "silver"
        btn_imun_trib.style.backgroundColor = "silver"
    }
    else {
        form_flw_up.style.display = "none"
        form_prospect.style.display = "flex"
        btn_follow_up.style.backgroundColor = "silver"
    }
})

// ativando e desativando formulário de bares e restaurantes
btn_bares_rest.addEventListener("click", function () {
    if (form_bares_rest.style.display == "none") {
        form_prospect.style.display = "none"
        form_flw_up.style.display = "none"
        form_imun_trib.style.display = "none"
        
        form_bares_rest.style.display = "flex"
        
        btn_bares_rest.style.backgroundColor = "rgba(0,255,0,.5)"
        btn_follow_up.style.backgroundColor = "silver"
        btn_imun_trib.style.backgroundColor = "silver"
    }
    else {
        form_bares_rest.style.display = "none"
        form_prospect.style.display = "flex"
        btn_bares_rest.style.backgroundColor = "silver"
    }
})

// ativando e desativando formulário de imunidade tributária
btn_imun_trib.addEventListener("click", function () {
    if (form_imun_trib.style.display == "none") {
        form_prospect.style.display = "none"
        form_flw_up.style.display = "none"
        form_bares_rest.style.display = "none"
        
        form_imun_trib.style.display = "flex"
        
        btn_imun_trib.style.backgroundColor = "rgba(0,255,0,.5)"
        btn_follow_up.style.backgroundColor = "silver"
        btn_bares_rest.style.backgroundColor = "silver"
    }
    else {
        form_imun_trib.style.display = "none"
        form_prospect.style.display = "flex"
        btn_imun_trib.style.backgroundColor = "silver"
    }
})