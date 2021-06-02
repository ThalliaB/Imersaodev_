var jogadores = [];

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

jogadores.pontos = calculaPontos(jogadores)

exibeJogadoresNaTela(jogadores);

function exibeJogadoresNaTela(jogadores) {
    var html = "";
    for(i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>"; 
        html += "<td>" + jogadores[i].pontos + "</td>";
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
    }
    var tabelajogadores = document.getElementById('tabelaJogadores');
    tabelajogadores.innerHTML = html;
}

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}

function adicionaJogador() {
    var nomeDigitado = document.getElementById('nome').value;

    var novoJogador = {
        nome: nomeDigitado,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0,
    }

    jogadores.push(novoJogador);
    exibeJogadoresNaTela(jogadores);
    document.getElementById('nome').value = "";
}