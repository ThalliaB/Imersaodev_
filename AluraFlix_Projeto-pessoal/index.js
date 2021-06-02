var lastOrder = ""
var multiverse = false
var movies = []

function buildMovie(id, nomeFilme, anoLanc, imagem, anoCron, linkPag, linkTrailer) {
    var movie = {
        id: id,
        nome: nomeFilme,
        anoLancamento: anoLanc,
        linkImagem: imagem,
        anoCronologico: anoCron,
        linkPagina: linkPag,
        linkTrailer: linkTrailer
    }

    return movie;
}

movies.push(buildMovie(0,
    "Toy Story",
    "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    1995))
    // "John Lasseter",
    

movies.push(buildMovie(1,
    "Star Wars: A Guerra dos Clones",
    "https://m.media-amazon.com/images/M/MV5BZWFlNzRmOTItZjY1Ni00ZjZkLTk5MDgtOGFhOTYzNWFhYzhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    2010))
    // "George Lucas",
    

movies.push(buildMovie(2,
    "Interestelar - Interstellar",
    "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    2014))
    // "Christopher Nolan",

movies.push(buildMovie(3,
    "Fozen: Uma Aventura Congelante",
    "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    2013))
    // "Chris Buck & Jennifer Lee",
    
movies.push(buildMovie(4,
    "Frozen II ",
    "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
    2019))
    // "Chris Buck & Jennifer Lee",

ordenar()

function ordenar() {
    var ordem = document.getElementById("ordenarFilmes").value

    if (ordem == "anoCronologico") {
        arraySort(movies, "anoLancamento")
    }

    arraySort(movies, ordem)

    // console.log(ordem + " - " + lastOrder)
    // if (ordem == lastOrder) {
    //   if (multiverse) {
    //     movies.sort() 
    //   } else {
    //     movies.reverse()
    //   }
    //   multiverse = !multiverse
    // }
    // lastOrder = ordem

    imprime()
}

function arraySort(vet, x) {
    vet.sort(function compare(a, b) {
        return a[x] < b[x] ? -1 : a[x] > b[x] ? 1 : 0
    })

    return vet
}

function imprime() {
    var ordem = document.getElementById("ordenarFilmes").value
    var filtro = ordem == "anoCronologico" ? "Cronologia: " : "Lançamento: "
    var div = document.querySelector('.container-total') //Mapeia o HTML em busca de um elemento com a classe '.container-total'
    div.innerHTML = ""

    for (movie of movies) {
        // Criação dos elementos
        var tagDivFilme = document.createElement('div')
        var tagA = document.createElement('a')
        var tagH2 = document.createElement('h2')
        var tagImage = document.createElement('img')

        // Anexando os elementos filhos aos elementos pais
        tagDivFilme.appendChild(tagH2)
        tagDivFilme.appendChild(tagImage)
        tagA.appendChild(tagDivFilme)
        div.appendChild(tagA)

        tagA.addEventListener('click', printTrailer)
        // Cria um atributo "data-linktrailer" com o trailer do filme
        tagA.dataset.linktrailer = movie.linkTrailer
        tagA.dataset.linkpagina = movie.linkPagina

        tagDivFilme.classList.add('container-movies') //Adiciono uma classe ao elemento

        tagH2.innerHTML = movie.nome + "<br>" + filtro +
            parseInt(ordem == "anoCronologico" ? movie.anoCronologico : movie.anoLancamento)

        tagImage.src = movie.linkImagem
        tagImage.alt = movie.nome
    }
}

function habilitaContainerCadastro() {
    document.querySelector('.container-cadastro').classList.add('ativo')
}

function desabilitaContainerCadastro() {
    let divCadastro = document.querySelector('.container-cadastro')

    divCadastro.classList.remove('ativo')
    limparCamposCadastro()
    // Criar a div .container-cadastro pelo javascript para utilizar a função remove()
    // setTimeout(() => {
    //   divCadastro.remove()
    // }, 1000)
}

function salvarFilme() {
    var nomeFilme = document.querySelector('#nomeFilme').value
    var anoLancamento = document.querySelector('#anoLancamentoFilme').value
    var imagem = document.querySelector('#linkImagemFilme').value
    var anoCronologico = document.querySelector('#anoCronologiaFilme').value
    var linkPagina = document.querySelector('#linkImdbFilme').value
    var linkTrailer = document.querySelector('#linkTrailerFilme').value

    var validacao = validaDadosCadastro(nomeFilme, anoLancamento, imagem, anoCronologico, linkPagina, linkTrailer)

    if (validacao.status) {
        var trailerLinkEdited = linkTrailer.substr(linkTrailer.indexOf("watch?v=", 0), 19).substr(8, 11)

        movies.push(buildMovie(0, nomeFilme, anoLancamento, imagem, anoCronologico, linkPagina, trailerLinkEdited))
        tocarSom()
        desabilitaContainerCadastro()
        ordenar()
    } else {
        imprimeErro(validacao.mensagem)
    }
}

function limparCamposCadastro() {
    document.querySelector('#nomeFilme').value = ""
    document.querySelector('#anoLancamentoFilme').value = ""
    document.querySelector('#linkImagemFilme').value = ""
    document.querySelector('#anoCronologiaFilme').value = ""
    document.querySelector('#linkImdbFilme').value = ""
    document.querySelector('#linkTrailerFilme').value = ""
}

function validaDadosCadastro(nome, anoLancamento, enderecoImagem, anoCronologico, enderecoResumo, enderecoTrailer) {
    var validacao = {
        status: true,
        mensagem: ""
    }

    if (nome == "") {
        validacao.status = false
        validacao.mensagem = "Informe o nome do filme"
        return validacao
    }
    if (isNaN(parseFloat(anoLancamento))) {
        validacao.status = false
        validacao.mensagem = "Ano de lançamento inválido"
        return validacao
    }
    if (isNaN(parseFloat(anoCronologico))) {
        validacao.status = false
        validacao.mensagem = "Ano cronológico inválido"
        return validacao
    }
    let strSize = enderecoTrailer.substr(enderecoTrailer.indexOf("watch?v=", 0), 19).substr(8, 11).length

    if (!isValidHttpUrl(enderecoTrailer) || (strSize < 11)) {
        validacao.status = false
        validacao.mensagem = "Endereço do trailer inválido"
        return validacao
    }
    if (!isValidHttpUrl(enderecoImagem)) {
        validacao.status = false
        validacao.mensagem = "Endereço da imagem inválido"
        return validacao
    }
    if (!(enderecoImagem.endsWith(".jpg") ||
        enderecoImagem.endsWith(".png") ||
        enderecoImagem.endsWith(".jfif"))) {
        validacao.status = false
        validacao.mensagem = "Imagem com formato inválido"
        return validacao
    }
    if (!isValidHttpUrl(enderecoResumo)) {
        validacao.status = false
        validacao.mensagem = "Endereço resumo inválido"
        return validacao
    }

    return validacao
}

function isValidHttpUrl(endereco) {
    let url

    try {
        url = new URL(endereco)
    } catch (_) {
        return false
    }

    return url.protocol === "http:" || url.protocol === "https:"
}

function tocarSom() {
    var audio = new Audio("https://protettordelinks.com/wp-content/baixar/mario_moeda_efeito_sonoro_toquesengracadosmp3.com.mp3")
    // var audio = new Audio("https://www.myinstants.com/media/sounds/avengers_assemble_l.mp3")
    audio.play()
}

function imprimeErro(mensagem) {
    let tagBody = document.querySelector("body")

    // Criação dos elementos
    let tagSpan = document.createElement("span")
    let tagDiv = document.createElement("div")

    // Anexando os elementos filhos aos elementos pais
    tagDiv.appendChild(tagSpan)
    tagBody.appendChild(tagDiv)

    tagDiv.classList.add("modal-erro") //id = atributo, modal = o valor do atributo

    tagSpan.innerHTML = mensagem
    tagSpan.classList.add("animate__animated")
    tagSpan.classList.add("animate__tada")
    //tagDiv.addEventListener('click', fechaModalErro)

    setTimeout(() => {
        tagDiv.remove()
    }, 2750)
}

function printTrailer(e) {
    let tagBody = document.querySelector("body");
    // Busca o conteúdo do atributo "data-linktrailer" referente a tag "a" mais próxima
    let movie = e.target.closest('a')
    console.log(movie)
    // Criação dos elementos
    let tagDivGeral = document.createElement("div");
    let tagDivTrailer = document.createElement("div");
    let tagIFrame = document.createElement("iframe");
    let tagButton = document.createElement("button");

    tagDivGeral.innerHTML = "";

    // Anexando os elementos filhos aos elementos pais
    // tagA.appendChild(tagButton)
    tagDivTrailer.appendChild(tagButton);
    tagDivTrailer.appendChild(tagIFrame);
    tagDivGeral.appendChild(tagDivTrailer);
    tagBody.appendChild(tagDivGeral);

    tagDivGeral.classList.add("modal-video-geral");
    tagDivGeral.addEventListener("click", closeTrailer);

    tagDivTrailer.classList.add("modal-video-trailer");

    tagIFrame.classList.add("modal-video-iframe");
    tagIFrame.setAttribute("src", "https://www.youtube.com/embed/" + movie.dataset.linktrailer);
    tagIFrame.setAttribute("title", "YouTube video player");
    tagIFrame.setAttribute("frameborder", 0);
    tagIFrame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    tagIFrame.setAttribute("allowfullscreen", "");

    tagButton.dataset.href = movie.dataset.linkpagina
    tagButton.addEventListener("click", goTo)
    tagButton.innerHTML = "Resumo"
}

function closeTrailer() {
    document.querySelector(".modal-video-geral").remove();
}

function goTo(e) {
    // Para a propagação do evento (Neste caso, o click)
    e.stopPropagation()
    var linkPagina = e.target.closest("button").dataset.href
    window.open(linkPagina)
}