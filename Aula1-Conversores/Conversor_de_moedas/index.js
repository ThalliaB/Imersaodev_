var valorEmDolarTexto = prompt("Qual valor em dólar você quer transformar?");

var valorEmDolarNumero = parseFloat(valorEmDolarTexto);

var valorEmReal = valorEmDolarNumero * 5.50;

var valorEmRealCentavos = valorEmReal.toFixed(2);

alert("O valor em dólar transformado em reais é de " + valorEmRealCentavos);

//Revisão
//variáveis var - int -float - string
//alert - prompt 
//parseInt - parseFloat
//operações => + somar * múltiplicar
//comentários