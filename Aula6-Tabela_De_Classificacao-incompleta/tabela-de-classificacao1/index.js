var paulo = {
    foto: '<img src="https://pbs.twimg.com/profile_images/930602367887822850/2v0lXfIR_400x400.jpg">',
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

var rafa = {
    foto: "<img src='https://www.gravatar.com/avatar/43a7c3791fac100582581ec5d80ac076.png?r=PG&size=200x200&date=2021-03-29&d=https%3A%2F%2Fcursos.alura.com.br%2Fassets%2Fimages%2Fforum%2Favatar_r.png'>",
    nome: "Rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [rafa, paulo]
exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for (var i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].foto + "</td>"
        html += "<td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")' id='botoes'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate()' id='botoes'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")' id='botoes'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate() {
    for (var i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i]
        jogador.empates++
        jogador.pontos = calculaPontos(jogador)
    }
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}

var num = 000;

function adicionarJogador() {
    var textoFoto = document.getElementById('foto').value;
    console.log(textoFoto)
    if (textoFoto == "") {
        var foto = '<img src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1608/tuktukdesign160800055/61010890-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg">'
    } else if (textoFoto.endsWith('.jpg') | textoFoto.endsWith('.png')) {
        foto = '<img src="' + textoFoto + '">';
    } else {
        foto = '<img src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1608/tuktukdesign160800055/61010890-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg">'
    }

    var nomeTexto = document.getElementById('nome').value
    if (nomeTexto == "") {
        var nome = num.toString()
        num++
    }
    else {
        nome = nomeTexto
    }

    var jogadorNovo = {
        foto: foto,
        nome: nome,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0,
    }
    jogadores.push(jogadorNovo)
    document.getElementById('nome').value = ""
    document.getElementById('foto').value = ""
    //console.log(jogadores)
    exibirJogadoresNaTela(jogadores)
}
