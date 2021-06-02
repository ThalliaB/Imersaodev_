var filmes =[

    {
        "name": "Toy Story",
        "image": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "creator": " John Lasseter",
        "publish": 1995
    },
     
    {
        "name": "Star Wars: A Guerra dos Clones",
        "image": "https://m.media-amazon.com/images/M/MV5BZWFlNzRmOTItZjY1Ni00ZjZkLTk5MDgtOGFhOTYzNWFhYzhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "creator": " George Lucas",
        "publish": 2010
    },

    {
        "name": "Interestelar - Interstellar",
        "image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "creator": " Christopher Nolan",
        "publish": 2014
    },

    {
        "name": "Fozen: Uma Aventura Congelante",
        "image": "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "creator": " Chris Buck,<br> Jennifer Lee",
        "publish": 2013,
    },

    {
        "name": "Frozen II ",
        "image": "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "creator": " Chris Buck,<br> Jennifer Lee",
        "publish": 2019,
    }

]

let divFilmes = document.querySelector('.allFilmes');
let div = document.createElement('div');

for (let i = 0; i < filmes.length; i++) {

    divFilmes.innerHTML += `<div class="filmes">
      <img src="${filmes[i].image}" />
      <span>${filmes[i].name}</span>
      <div class="description">
      <p>${filmes[i].creator}</p>
      <p>${filmes[i].publish}</p>
      </div>
    </div>`;
}