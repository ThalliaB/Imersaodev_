var jogadores = []


function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

jogadores.pontos = calculaPontos(jogadores)

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for (i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<ted><button onClick='adicionarDerrota(" + i + ")'>Derrota<?button></td>"
        html += "<td><button onClick='limparTudo(" + i + ")'>Limpar</button></td>"
        html += "<td><button onClick='Exit(" + i + ")'>Sair</button></td></tr>"


    }

    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}

function limparTudo(i) {
    jogadores[i].vitorias = 0
    jogadores[i].empates = 0
    jogadores[i].derrotas = 0
    exibirJogadoresNaTela(jogadores)
}

function registrarJogador() {
    var nomeDigitado = document.getElementById("nomeJogador").value


    var novoPlayer = {
        nome: nomeDigitado,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    }

    jogadores.push(novoPlayer)
    exibirJogadoresNaTela(jogadores)
    //  console.log(jogadores)
    document.getElementById("nomeJogador").value = ""
}

function Exit(i) {
    jogadores.splice(i, 1)
    exibirJogadoresNaTela(jogadores)



    // </table><br>
    //(<input) para adicionar uma saída sendo dita de que tipo ela será(type="text") o nome da id dela para usarmos no JavaScript (id="nomeJogador") e o nome de como ela ficará quando for mostrada(placeholder="Insira o player")e aqui fechar ela(></input>)
    //(<button) inicio para colocar um botão, (type="button") para definir de que tipo será,nesse caso botão (onClick="registrarJogador()">Registrar) aqui definimos o como será o botão e o que ele fará (</button>) aqui fechamos
}
