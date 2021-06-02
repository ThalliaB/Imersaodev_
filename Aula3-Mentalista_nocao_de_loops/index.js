var numeroSecreto = parseInt(Math.random() * 10);
var tentativas = 3;

while (tentativas > 0) {
    var chute = parseInt(prompt("Digite um número de 0 à 10"));

    if (chute == numeroSecreto) {
        alert("Você acertou");
        break;
    } else if (chute < numeroSecreto) {
        alert("O número é maior");
        tentativas = tentativas - 1;
    } else if (chute > numeroSecreto) {
        alert("O número é menor");
        tentativas = tentativas - 1;
    }
}

if (chute != numeroSecreto) {
    alert("Suas tentativas acabaram. O numero secreto era " + numeroSecreto);
}