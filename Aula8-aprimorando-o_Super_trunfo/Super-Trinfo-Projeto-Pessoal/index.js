var carta1 = {
    nome: "Pastor Alemão",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/27/2._DSC_0346_%2810096362833%292.jpg",
    atributos: {
        tamanho: 70,
        meiguice: 30,
        brabeza: 65
    }
}

var carta2 = {
    nome: "Buldogue",
    imagem: "https://i.pinimg.com/originals/28/cf/df/28cfdfab80691480a5b76effc85adb42.jpg",
    atributos: {
        tamanho: 40,
        meiguice: 45,
        brabeza: 44
    }
}

var carta3 = {
    nome: "Poodle",
    imagem: "https://i.pinimg.com/originals/7b/3e/dd/7b3edd980ab3c2fc242e3b83fc876596.jpg",
    atributos: {
        tamanho: 68,
        meiguice: 75,
        brabeza: 40
    }
}

var carta4 = {
    nome: "Labrador retriever",
    imagem: "https://blackwhitepet.com.br/resources/img/racas-de-cachorro-labrador.jpg",
    atributos: {
        tamanho: 60,
        meiguice: 80,
        brabeza: 25
    }
}

var carta5 = {
    nome: "Dachshund",
    imagem: "https://www.azpetshop.com.br/blog/wp-content/uploads/2020/10/dachshund-salsicha-1024x799.jpg",
    atributos: {
        tamanho: 50,
        meiguice: 70,
        brabeza: 45
    }
}

var carta6 = {
    nome: "Rottweiler",
    imagem: "https://blog.arbolez.com/wp-content/uploads/2018/09/ra%C3%A7a-de-cachorro-rottweiler.jpg",
    atributos: {
        tamanho: 75,
        meiguice: 20,
        brabeza: 80
    }
}

var carta7 = {
    nome: "Bull terrier",
    imagem: "https://www.barkyn.com/learning-press/wp-content/uploads/2018/12/meio-bull-terrier.jpg",
    atributos: {
        tamanho: 67,
        meiguice: 78,
        brabeza: 22
    }
}


var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];

var cartaMaquina
var cartaJogador

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 7);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 7);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 7);
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibeCartaJogador();
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador');
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style = " width: inherit; height: inherit; position:absolute;" >';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    var html = "<div id = 'opcoes' class = 'carta-status'>";

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina');
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style = " width: inherit; height: inherit; position:absolute;" >';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>";
    }

    var html = "<div id = 'opcoes' class = 'carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";

    document.getElementById('btnResetar').disabled = false;

}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo');
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var divResultado = document.getElementById('resultado');
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class = "resultado-final">Venceu</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class = "resultado-final">Perdeu</p>'
    } else {
        htmlResultado = '<p class = "resultado-final">Empatou</p>'
    }
    divResultado.innerHTML = htmlResultado;
    exibeCartaMaquina();
}

function jogarNovamente() {
    document.getElementById('btnResetar').disabled = true;
    
    var divCartaJogador = document.getElementById('carta-jogador');
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style = " width: inherit; height: inherit; position:absolute;" >';
    divCartaJogador.style.backgroundImage = `url(${""})`;

    var divCartaMaquina = document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage = `url(${""})`;

    var divResultado = document.getElementById('resultado');
    htmlResultado = '<p class="resultadoFinal"></p>';
    // Na questão da divResultado ela não precisaria ser reescrita, pois el não irá receber nada, poderia ser somente colocado no inal do código um divResultado.innerHTML = "". Assim ele seria direcionado o conteúdo vazio para o html, deixando o espaço em branco.
    
    document.getElementById('btnSortear').disabled = false;
    document.getElementById('btnJogar').disabled = true;

    divCartaJogador.innerHTML = moldura;
    divCartaMaquina.innerHTML = moldura;
    divResultado.innerHTML = htmlResultado;
}