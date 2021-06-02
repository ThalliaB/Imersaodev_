var primeiroValor = parseInt(prompt("Digite o primeiro valor"));
var operacao = prompt("Qual operação matemática você que utilizar? Digite 1 para dividir, 2 para multiplicar, 3 para subtrair ou 4 para somar!");
var segundoValor = parseInt(prompt("Digite o segundo valor"));

if (operacao == 1) {
    var resultado = primeiroValor / segundoValor;
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>");
} else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor;
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>");
} else if (operacao == 3) {
    var resultado = primeiroValor - segundoValor;
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>");
} else if (operacao == 4) {
    var resultado = primeiroValor + segundoValor;
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>");
} else {
    document.write("<h2>OPÇÃO INVÁLIDA</h2>");
}

// document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>");

//if = se
//else = senão
//else if = senão se