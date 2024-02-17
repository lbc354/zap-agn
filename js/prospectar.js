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
const spanServico = document.querySelector(".span-servico")
// variável serviço recebe vazio
var servicoValue = ""
// passamos o nome do serviço como parâmetro
function servico(v) {
    // armazenando o valor inserido no campo (tipo de serviço) na variável servico_v
    if (servicoValue != v) {
        servicoValue = v
        spanServico.innerHTML = servicoValue
    } else {
        servicoValue = ""
        spanServico.innerHTML = ""
    }
    
    // apenas para deixar o usuário ciente do que ele selecionou (podemos alterar a cor do campo selecionado igual dos botões de formulário)
}



//// enviando mensagem de prospecção
// lendo id dos inputs
const zap = document.querySelector("#zap")
const agente = document.querySelector("#agente")
const lead = document.querySelector("#lead")
const genero = document.querySelector("#genero")
const treinee = document.querySelector("#treinee")
const btnProsp = document.querySelector("#btn-prospectar")

// função que vai ser chamada ao clicar no botão enviar
function enviarProspect() {
    var leadMsgEstruturada = ""
    var treineeMsgEstruturada = ""

    // verifica se foi passado o nome do treinee
    if (treinee.value != "") {
        // caso sim, esse texto será formado
        treineeMsgEstruturada = `${genero.value}${treinee.value} me passou seu contato mostrando interesse em fazer um projeto.%0A%0A`
    }

    // verifica se foi passado o serviço
    if (servicoValue != "") {
        // verifica se foi passado o nome do treinee
        if (treinee.value != "") {
            // caso sim, iremos alterar a mensagem formada acima
            treineeMsgEstruturada = `${genero.value}${treinee.value} me passou seu contato mostrando interesse em fazer um projeto de ${servicoValue}, que é justamente um dos nossos carros chefes aqui na PCI.%0A%0A`
        }
        // caso não, esse texto será formado
        else {
            treineeMsgEstruturada = `Realizamos serviços de ${servicoValue}, e estamos entrando em contato para checar seu interesse nesse serviço. Somos referência nesse tipo de projeto e é um dos nossos carros chefes.%0A%0A`
        }
    }

    // verifica se foi passado o nome do lead
    if (lead.value != "") {
        // caso sim, iremos inserir seu nome na mensagem
        leadMsgEstruturada = `, ${lead.value}`
    }



    // formando e armazenando o texto final na variável mensagem
    // %0D é a maneira de escrever enter (quebra de linha) através de uma url
    // porém, ela não é repeitada no whatsapp, então usamos %0A, assim vai funcionar
    // apesar de que %0D funcionou pelo computador, mas não pelo celular
    var mensagem = `Olá${leadMsgEstruturada}! Tudo bem?%0A%0AMe chamo ${agente.value} e sou agente comercial da Projetos Consultoria Integrada (PCI). Atuamos há mais de 24 anos no mercado e somos uma empresa de consultoria.%0A%0A${treineeMsgEstruturada}Queria saber da possibilidade de marcarmos uma reunião de diagnóstico, sem compromisso, para entendermos melhor como podemos te ajudar!`
    // url que vai ser aberta ao clicar no botão enviar
    var msg = `https://wa.me/55${zap.value}/?text=${mensagem}`
    // assim abrimos a url em outra janela
    var janela = window.open(msg, "_blank")
    janela.focus()

    // reseta formulário menos o nome do agente
    zap.value = ""
    lead.value = ""
    genero.value = ""
    treinee.value = ""
    servico("")
}



var numeroErrado = false
function verificarNumero() {
    // split separa uma string em caracteres
    var telefone = zap.value.split('')
    // percorre cada caractere da string
    for (var i = 0; i < zap.value.length; i++) {
        var onlyNumbers = /[0-9]/
        // se o caractere for diferente de número
        if (!onlyNumbers.test(telefone[i])) {
            numeroErrado = true
            return
        }
    }
}



const zapErro = document.querySelector(".zap-erro")
const agenteErro = document.querySelector(".nome-erro")
btnProsp.addEventListener('click', (e) => {
    verificarNumero()
    
    if (zap.value.length < 11 || numeroErrado == true) {
        zapErro.innerHTML = "O número está incorreto"
        numeroErrado = false
        return
    } else {
        zapErro.innerHTML = ""
    }
    // verificamos se o nome do agente está vazio
    if (agente.value == "") {
        agenteErro.innerHTML = "Insira seu nome"
        return
    } else {
        agenteErro.innerHTML = ""
    }

    enviarProspect()
})