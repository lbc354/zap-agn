//// inserindo uma regex no campo de telefone
// regex -> uma regex "provê uma forma concisa e flexível de identificar cadeias de caracteres de interesse, como caracteres particulares, palavras ou padrões de caracteres"

// formulário de prospecção
const zapRegex = document.querySelector("#zap")
// essa regex aí em baixo impede que o usuário escreva qualquer caractere que não seja número no campo de telefone
zapRegex.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/
    const key = String.fromCharCode(e.keyCode)
    if (!onlyNumbers.test(key)) {
        e.preventDefault()
        return
    }
})

// formulário de follow-up
const zapFlwUpRegex = document.querySelector("#zap-flw-up")
zapFlwUpRegex.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/
    const key = String.fromCharCode(e.keyCode)
    if (!onlyNumbers.test(key)) {
        e.preventDefault()
        return
    }
})

// formulário de bares e restaurantes
const zapBarRestRegex = document.querySelector("#zap-bares-rest")
zapBarRestRegex.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/
    const key = String.fromCharCode(e.keyCode)
    if (!onlyNumbers.test(key)) {
        e.preventDefault()
        return
    }
})

// OBS:

// 1 - tem uma função que é parecida nos arquivos de cada form, mas a diferença é que aqui evitamos o usuário de digitar caractere diferente de número, mas não evitamos de copiar e colar esses caracteres. as funções de verificação lá checam cada caractere da string. então, enquanto aqui evitamos de ser digitado, lá evitamos o submit

// 2 - cheguei a criar uma classe chamada "regex" e colocar nos 3 inputs de número para não ter repetição de código, mas ela só funcionou no input do formulário de prospecção, não funcionou nos 3 ao mesmo tempo, aí mantive assim mesmo