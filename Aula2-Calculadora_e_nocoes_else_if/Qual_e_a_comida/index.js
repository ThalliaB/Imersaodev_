var comida = prompt("Qual é a comida? Encolha uma das alternativas: 1 para milho, 2 para arroz e 3 para feijão");

if(comida == 1) {
    document.write("<h2>Ops, você errou, a comida abaixo é arroz!</h2>");
}else if(comida == 2) {
    document.write("<h2>Parabéns, você acertou, a comida a baixo é arroz!!!</h2>");
}else if(comida == 3) {
    document.write("<h2>Ops, você errou, a comida abaixo é arroz!</h2>");
}else {
    document.write("<h2>Ops, o número " + comida + " não está na nossa lista :(<br>");
    document.write("A comida aqui é arroz! Tente novamente com um número aceito!");
}