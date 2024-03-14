function regex(e) {
    const onlyNumbers = /[0-9]/
    const key = String.fromCharCode(e.keyCode)
    if (!onlyNumbers.test(key)) {
        e.preventDefault()
        return
    }
}

// OBS: tem uma função que é parecida nos arquivos de cada form, mas a diferença é que aqui evitamos o usuário de digitar caractere diferente de número, mas não evitamos de copiar e colar esses caracteres. as funções de verificação lá percorrem cada caractere da string e checam se é número ou não. então, enquanto aqui evitamos de ser digitado, lá evitamos o submit