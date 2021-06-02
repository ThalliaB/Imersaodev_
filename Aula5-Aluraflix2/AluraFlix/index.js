function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme');
  var filmeFavorito = campoFilmeFavorito.value;
  if(filmeFavorito.endsWith('.jpg')) {
      listarFilmesNaTela(filmeFavorito);
  }else {
    alert("Ops, verificamos que o link deigitado não esta nos levando ao lugar desejado. Por favor verifique e digite novamente.");
  }
  campoFilmeFavorito.value = "";
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = "<img src=" + filme + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}