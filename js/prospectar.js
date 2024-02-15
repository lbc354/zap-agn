//// ativando e desativando botões
// lendo os ids dos 3 formulários e dos botões
const form_prospect = document.querySelector("#prospect")

const form_flw_up = document.querySelector("#follow-up")
const btn_follow_up = document.querySelector("#botao-follow-up")

const form_bares_rest = document.querySelector("#bares-restaurantes")
const btn_bares_rest = document.querySelector("#botao-bares-rest")

// adicionando evento de clique nos botões
btn_follow_up.addEventListener("click", function () {
    // se o formulário de prospecção ou de bares estiver ativo...
    if (form_prospect.style.display === "flex" || form_bares_rest.style.display === "flex") {
        // ... desativamos eles...
        form_prospect.style.display = "none"
        form_bares_rest.style.display = "none"
        // ... e ativamos o de follow-up
        form_flw_up.style.display = "flex"
        // aqui é só mudando a cor do botão
        btn_follow_up.style.backgroundColor = "rgba(0,255,0,.5)"
        btn_bares_rest.style.backgroundColor = "silver"
    }
    // senão, ou seja, se o formulário de prospecção estiver desativado...
    else {
        // desativamos o de follow-up...
        form_flw_up.style.display = "none"
        // ... desativamos o de bares e restaurantes...
        form_bares_rest.style.display = "none"
        // ... e ativamos ele
        form_prospect.style.display = "flex"
        // mudando a cor do botão novamente
        btn_follow_up.style.backgroundColor = "silver"
        btn_bares_rest.style.backgroundColor = "silver"
    }
})

// agora fazemos a mesma coisa com o botão bares e restaurantes
btn_bares_rest.addEventListener("click", function () {
    // se o formulário de prospecção ou de follow-up estiver ativo...
    if (form_prospect.style.display === "flex" || form_flw_up.style.display === "flex") {
        // ... desativamos eles...
        form_prospect.style.display = "none"
        form_flw_up.style.display = "none"
        // ... e ativamos o de follow-up
        form_bares_rest.style.display = "flex"
        // aqui é só mudando a cor do botão
        btn_bares_rest.style.backgroundColor = "rgba(0,255,0,.5)"
        btn_follow_up.style.backgroundColor = "silver"
    }
    // senão, ou seja, se o formulário de prospecção estiver desativado...
    else {
        // desativamos o de bares e restaurantes...
        form_bares_rest.style.display = "none"
        // ... desativamos o de follow-up...
        form_flw_up.style.display = "none"
        // ... e ativamos ele
        form_prospect.style.display = "flex"
        // mudando a cor do botão novamente
        btn_follow_up.style.backgroundColor = "silver"
        btn_bares_rest.style.backgroundColor = "silver"
    }
})



//// inserindo uma regex no campo de telefone
// regex -> uma regex "provê uma forma concisa e flexível de identificar cadeias de caracteres de interesse, como caracteres particulares, palavras ou padrões de caracteres"
// lendo o id do campo de telefone
const zap = document.querySelector("#zap")
// essa regex aí em baixo impede que o usuário escreva qualquer caractere que não seja número no campo de telefone
zap.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/
    const key = String.fromCharCode(e.keyCode)
    if (!onlyNumbers.test(key)) {
        e.preventDefault()
        return
    }
})



//// adicionando filtro ao procurar por serviços
// essa função vai receber um parâmetro c, que seria o nome da classe pela qual vamos procurar
function filter(c) {
    var i, x
    // a variável x irá receber todos os campos que possuem a classe box
    x = document.getElementsByClassName("box")
    // aqui iremos percorrer com i cada elemento salvo na variável x (cada serviço)
    for (i = 0; i < x.length; i++) {
        // essa função remove a classe show, que os torna visíveis
        // no primeiro clique, nenhum elemento possui a classe show, todos são invisíveis, mas essa função é escrita primeiro porque a partir do segundo clique alguns elementos terão a classe show, e precisamos removê-la primeiro para podermos mostrar os outros serviços corretamente
        // x[i], "show" -> estamos percorrendo cada elemento salvo em x com i (assim como um vetor), e x[i] quer dizer que no elemento atual onde estiver i nós iremos remover a classe show
        removeClass(x[i], "show")
        // esse if está escrito em apenas uma linha porque o js permite isso, caso vc só tenha 1 comando a ser executado pode escrever em apenas uma linha sem problemas
        // x[i] -> o elemento em que i está atualmente
        // className -> nome da classe
        // indexOf(c) -> parâmetro que passamos pelo html
        // > -1 -> é uma maneira de dizer que o valor do parâmetro passado (arq, jur, etc.) existe na classe de algum dos elementos x
        // addClass -> função que adiciona uma classe ou mais classes
        // x[i], "show" -> o elemento em que i está atualmente iremos adicionar a classe show
        // RESUMINDO, LEMOS ASSIM:
        // se (if)
        // o elemento atual (x[i])
        // possui uma classe com nome (className)
        // igual ao do parâmetro (indexOf(c))
        // ou seja, se existe (> -1)
        // então adicionamos (addClass())
        // o nome "show" neste mesmo elemento (x[i], "show")
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}

// função que adiciona o nome de uma classe em um elemento
// está interligado com filter() então preste atenção nos 2
function addClass(element, name) {
    var i, arr1, arr2;
    // pega o elemento atual (x[i]), divide cada nome dentro da classe (className) a partir do espaço entre cada palavra (split(" ")) e salva em arr1
    arr1 = element.className.split(" ");
    // pega o nome da classe (name) passada em filter (nesse caso, passamos apenas o nome "show"), divide cada nome dentro da classe a partir do espaço entre cada palavra (split(" ")) e salva em arr2
    // esse split() existe porque com essa função podemos inserir uma ou mais classes em cada elemento
    // por exemplo, se em filter() eu quiser passar os nomes "show" e "color" (separados por espaço), eu posso inserir as duas classes no elemento sem problema nenhum, sendo a primeira para mostrar a classe e a segunda para alterar a cor do elemento, por exemplo
    arr2 = name.split(" ");
    // vamos percorrer os nomes salvos em arr2
    // como só adicionamos "show", então seu length é igual a 1
    for (i = 0; i < arr2.length; i++) {
        // LEMOS ASSIM:
        // se
        // no vetor arr1 (lembrando que esse vetor está salvando cada nome existente na classe)
        // não possui (== -1)
        // o nome da classe (nesse caso "show") que está salvo em arr2 (arr2[i])
        // então, o elemento (element) vai adicionar (+=) em sua classe (className) um espaço (" ") e o nome que se queira adicionar (arr2, ou seja, "show")
        if (arr1.indexOf(arr2[i]) == -1) element.className += " " + arr2[i];
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    // mesma coisa feita acima, salvamos os nomes da classe e o nome passado nos vetores arr1 e arr2 respectivamente
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    // novamente, por só termos passado "show" então o length é igual a 1
    for (i = 0; i < arr2.length; i++) {
        // estrutura while numa linha só (assim como o if, podemos fazer isso)
        // LEMOS ASSIM:
        // enquanto
        // no vetor arr1
        // o nome da classe, ou seja, nesse caso "show" (indexOf(arr2[i]))
        // existir (> -1)
        // então, no vetor arr1
        // vamos remover (splice())
        // o(s) nome(s) salvo(s) em arr2 (nesse caso, apenas o "show")
        // e substituimos por nulo
        // PARA MELHOR ENTENDIMENTO DO SPLICE(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        // o método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove/substitui elementos antigos
        // sua estrutura é: splice(i, a_s, valor)
        // i -> você vai informar em qual index do vetor você vai adicionar ou substituir um elemento
        // a_s -> define se o valor vai ser adicionado ou substituído no index (se for 0, vai inserir, se for 1, vai substituir)
        // valor -> valor que vai ser inserido no index
        // nesse caso, passamos o index (arr1.indexOf(arr2[i])) e definimos que vai ser substituído (1), mas não definimos o valor, ou seja, ele será substituído por nada, ficará vazio
        while (arr1.indexOf(arr2[i]) > -1) arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
    // LEMOS ASSIM:
    // o valor da classe do elemento (element.className)
    // recebe uma junção dos nomes que sobraram (arr1.join(" "))
    // PARA MELHOR ENTENDIMENTO DO JOIN(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    // nesse caso, como pôde ser notado acima, o splice deixaria um espaço em branco no nome da classe
    // o join pega cada valor de um vetor e concatena em uma única string baseado ou não em um separador
    // ou seja, aqui estamos pegando todos os nomes que restaram na classe do elemento, concatenamos em uma string e separamos por espaço, assim, o espaço vazio que sobrou após o splice deixa de existir
    element.className = arr1.join(" ");
}



//// pegando o valor do serviço clicado
const botao = document.querySelector(".box")
const s = document.querySelector(".span-servico")
// variável serviço recebe nulo
var servico_v = ""
// passamos o nome do serviço como parâmetro
function servico(v) {
    // armazenando o valor inserido no campo (tipo de serviço) na variável servico_v
    servico_v = v
    // apenas para deixar o usuário ciente do que ele selecionou (seria legal alterar a cor do campo selecionado)
    s.innerHTML = servico_v
}



//// enviando mensagem de prospecção
// já lemos o id do campo telefone acima, por isso não precisa ler de novo
// lendo o id do campo de nome do agente comercial
const agente = document.querySelector("#agente")
// lendo o id do campo de nome do lead
const lead = document.querySelector("#lead")
// lendo o id do campo de gênero do treinee ("O" ou "A" treinee)
const genero = document.querySelector("#genero")
// lendo o id do campo de nome do treinee
const treinee = document.querySelector("#treinee")
// lendo o id do campo de botão de envio de prospecção
const btn = document.querySelector("#btn-prospectar")

// função que vai ser chamada ao clicar no botão enviar
function enviarProspect() {
    var zap_v = zap.value
    var agente_v = agente.value

    var lead_v = lead.value
    var lead_msg_estruturada = ""
    
    var genero_treinee_v = genero.value
    var treinee_v = treinee.value

    // estruturando mensagem
    var treinee_msg_estruturada = ""
    // verifica se foi passado o nome do treinee
    if (treinee_v != "") {
        // caso sim (valor diferente de vazio), esse texto será formado
        treinee_msg_estruturada = `${genero_treinee_v}${treinee_v} me passou seu contato mostrando interesse em fazer um projeto.%0A%0A`
    }
    // verifica se foi passado o serviço
    if (servico_v != "") {
        // verifica se foi passado o nome do treinee
        if (treinee_v != "") {
            // caso sim (valor diferente de vazio), iremos alterar a mensagem formada acima
            treinee_msg_estruturada = `${genero_treinee_v}${treinee_v} me passou seu contato mostrando interesse em fazer um projeto de ${servico_v}, que é justamente um dos nossos carros chefes aqui na PCI.%0A%0A`
        }
        // caso não, esse texto será formado
        else {
            treinee_msg_estruturada = `Realizamos serviços de ${servico_v}, e estamos entrando em contato para checar seu interesse nesse serviço. Somos referência nesse tipo de projeto e é um dos nossos carros chefes.%0A%0A`
        }
    }

    // verifica se foi passado o nome do lead
    if (lead_v != "") {
        // caso sim, iremos inserir seu nome na mensagem
        lead_msg_estruturada = `, ${lead_v}`
    }



    // formando e armazenando o texto final na variável mensagem
    // %0D é a maneira de escrever enter (quebra de linha) através de uma url
    // porém, ela não é repeitada no whatsapp, então usamos %0A, assim vai funcionar
    // apesar de que %0D funcionou pelo computador, mas não pelo celular
    var mensagem = `Olá${lead_msg_estruturada}! Tudo bem?%0A%0AMe chamo ${agente_v} e sou agente comercial da Projetos Consultoria Integrada (PCI). Atuamos há mais de 24 anos no mercado e somos uma empresa de consultoria.%0A%0A${treinee_msg_estruturada}Queria saber da possibilidade de marcarmos uma reunião de diagnóstico, sem compromisso, para entendermos melhor como podemos te ajudar!`
    // url que vai ser aberta ao clicar no botão enviar
    var msg = `https://wa.me/55${zap_v}/?text=${mensagem}`
    // assim abrimos a url em outra janela
    var janela = window.open(msg, "_blank")
    janela.focus()

    zap.value = ""
    lead.value = ""
    genero.value = ""
    treinee.value = ""
    servico("")
}



const zap_erro = document.querySelector(".zap-erro")
const nome_erro = document.querySelector(".nome-erro")
btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (zap.value.length != 11) {
        zap_erro.innerHTML = "O número está incorreto"
        return
    } else {
        zap_erro.innerHTML = ""
    }
    if (agente.value == "") {
        nome_erro.innerHTML = "Insira seu nome"
        return
    } else {
        nome_erro.innerHTML = ""
    }

    enviarProspect()
})