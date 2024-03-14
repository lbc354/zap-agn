//// adicionando filtro ao procurar por serviços

// essa função vai receber um parâmetro c, que seria o nome da classe pela qual vamos procurar
function filter(c) {
    var i, x
    // a variável x irá receber todos os campos que possuem a classe box
    x = document.getElementsByClassName("box")
    // aqui iremos percorrer com i cada elemento salvo na variável x (cada serviço)
    for (i = 0; i < x.length; i++) {
        // no primeiro clique, nenhum elemento possui a classe show, todos são invisíveis, mas essa função é escrita primeiro porque a partir do segundo clique alguns elementos terão a classe show, e precisamos removê-la primeiro para podermos mostrar os outros serviços corretamente
        // x[i], "show" -> estamos percorrendo cada elemento salvo em x com i (como num vetor), e x[i] quer dizer que no elemento atual onde estiver i nós iremos remover a classe show, que os torna visíveis
        removeClass(x[i], "show")
        // x[i] -> o elemento em que i está atualmente
        // className -> nome da classe
        // indexOf(c) -> parâmetro que passamos pelo html (arq, jur, etc.)
        // > -1 -> é uma maneira de verificar se o valor do parâmetro passado pelo html existe na classe de algum dos elementos x
        // addClass -> função que adiciona uma ou mais classes
        // x[i], "show" -> no elemento em que i está atualmente, iremos adicionar a classe show
        // RESUMINDO, LEMOS ASSIM: se o elemento atual possui uma classe com nome igual ao do parâmetro, ou seja, se existe, então adicionamos em sua classe o nome "show" neste mesmo elemento
        if (x[i].className.indexOf(c) > -1) {
            addClass(x[i], "show")
        }
    }
}



function addClass(element, name) {
    var i, arr1, arr2;
    // pega o elemento atual (x[i]), divide cada nome dentro da classe (className) a partir do espaço entre cada palavra (split(" ")) e salva em arr1
    arr1 = element.className.split(" ");
    // pega o nome da classe (name) passada em filter (nesse caso, passamos apenas o nome "show"), divide cada nome dentro da classe a partir do espaço entre cada palavra (split(" ")) e salva em arr2
    // esse split(" ") existe porque com essa função podemos inserir uma ou mais classes nos elementos, caso necessário
    arr2 = name.split(" ");
    // vamos percorrer os nomes salvos em arr2
    // como só adicionamos "show", então seu length é igual a 1
    for (i = 0; i < arr2.length; i++) {
        // LEMOS ASSIM: se no vetor arr1 não existe (== -1) o nome da classe que está salvo em arr2 (nesse caso "show") então, o elemento vai adicionar em sua classe um espaço e o nome que se queira adicionar, ou seja, "show"
        if (arr1.indexOf(arr2[i]) == -1) element.className += " " + arr2[i];
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    // parecido com o que foi feito acima
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        // o método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove/substitui elementos antigos
        // sua estrutura é: splice(i, a_s, valor)
        // i -> você vai informar em qual index do vetor você vai adicionar ou substituir um elemento
        // a_s -> define se o valor vai ser adicionado ou substituído no index (se for 0, vai inserir, se for 1, vai substituir)
        // valor -> valor que vai ser inserido no index
        // nesse caso, passamos o index e definimos que vai ser substituído, mas não definimos o valor, ou seja, ele será substituído por nada, ficará vazio
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    // então, o valor da classe do elemento (element.className) recebe uma junção dos nomes que sobraram (arr1.join(" "))
    // fazzemos isso pq o splice feito acima deixa um espaço em branco no nome da classe
    // o join pega cada valor de um vetor e concatena em uma única string baseado ou não em um separador, ou seja, aqui estamos pegando todos os nomes que restaram na classe do elemento, concatenamos em uma string e separamos por espaço, assim, o espaço vazio que sobrou após o splice deixa de existir
    element.className = arr1.join(" ");
}