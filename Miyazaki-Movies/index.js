var titulo = [
    "Como você vive?",
    "Vidas ao Vento",
    "Ponyo: Uma Amizade que Veio do Mar",
    "O Castelo Animado",
    "A Viagem de Chihiro",
    "Princesa Mononoke",
    "Porco Rosso: O Último Herói Romântico",
    "O Serviço de Entregas da Kiki",
    "Meu Amigo Totoro",
    "O Castelo no Céu"
];

var poster = [
    "https://m.media-amazon.com/images/M/MV5BOTkxN2MwNmUtYTQwZC00NmVhLTkxM2ItZjY5ODA4ZDhlYTE4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTc3YmM3N2QtODZkMC00ZDE5LThjMTQtYTljN2Y1YTYwYWJkXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZjVkYmFkZWQtZmNjYy00NmFhLTliMWYtNThlOTUxNjg5ODdhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR11,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTc0ODM1Njk1NF5BMl5BanBnXkFtZTcwMDI5OTEyNw@@._V1_UY268_CR3,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNTg0NmI1ZGQtZTUxNC00NTgxLThjMDUtZmRlYmEzM2MwOWYwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY268_CR2,0,182,268_AL_.jpg"
];

var alt = [];

var tituloOriginal = [
    "Kimitachi wa dô ikiru ka",
    "Kaze tachinu",
    "Gake no ue no Ponyo",
    "Hauru no ugoku shiro",
    "Sen to Chihiro no kamikakushi",
    "Mononoke-hime",
    "Kurenai no buta",
    "Majo no takkyûbin",
    "Tonari no Totoro",
    "Tenkû no shiro Rapyuta"
];

var data = [
    "em produção",
    "28 de fevereiro de 2014",
    "30 de julho de 2010",
    "5 de agosto de 2005",
    "18 de julho de 2003",
    "25 de dezembro de 1999",
    "24 de junho de 1994",
    "27 de julho de 1990",
    "8 de março de 1995",
    "14 de julho de 1989"
];

var sinopse = [
    "O filme retrata o desenvolvimento psicológico de um adolescente por meio da interação com seus amigos e tio.",
    "Jiro sonha em voar e projetar lindos aviões inspirados no famoso designer aeronáutico italiano Caproni. Míope desde jovem e incapaz de ser piloto, Jiro ingressa em uma grande empresa de engenharia japonesa em 1927 e se torna um dos projetistas de aviões mais inovadores e talentosos do mundo. O filme narra grande parte de sua vida, retratando eventos históricos importantes, incluindo o Grande Terremoto de Kanto em 1923, a Grande Depressão, a epidemia de tuberculose e o mergulho do Japão na guerra. Jiro conhece e se apaixona por Nahoko, cresce e valoriza sua amizade com seu colega Honjo.",
    "Filho de um marinheiro, Sosuke de 5 anos vive uma vida tranquila em um penhasco à beira-mar com sua mãe Lisa. Em um dia fatídico, ele encontra um lindo peixinho dourado preso em uma garrafa na praia e, ao resgatá-la, dá-lhe o nome de Ponyo. Mas ela não é um peixinho dourado comum. Filha de um mago mestre e de uma deusa do mar, Ponyo usa a magia de seu pai para se transformar em uma jovem e rapidamente se apaixona por Sosuke, mas o uso de tal feitiçaria poderosa causa um desequilíbrio perigoso no mundo. Conforme a lua se aproxima cada vez mais da terra e o pai de Ponyo envia ondas poderosas do oceano para encontrar sua filha, as duas crianças embarcam em uma aventura de uma vida para salvar o mundo e realizar os sonhos de Ponyo de se tornar humano.",
    "Uma história de amor entre uma garota de 18 anos chamada Sophie, amaldiçoada por uma bruxa para ficar com o corpo de uma velha, e um mágico chamado Howl. Sob a maldição, Sophie sai em busca de seu destino, que a leva ao estranho castelo móvel de Howl. No castelo, Sophie encontra o demônio do fogo de Howl, chamado Karishifâ. Vendo que ela está sob uma maldição, o demônio faz um trato com Sophie - se ela quebrar o contrato que ele fez com Howl, então Karushifâ cancelará a maldição que Sophie está submetida, e ela voltará para seu corpo de 18 anos.",
    "Chihiro e seus pais estão se mudando para uma pequena cidade no interior, para desespero de Chihiro. No caminho para sua nova casa, o pai de Chihiro vira errado e dirige por uma estrada deserta que termina em frente a um túnel. Seus pais decidem parar o carro e explorar a área. Eles passam pelo túnel e encontram um parque de diversões abandonado do outro lado, com sua própria pequena cidade. Quando seus pais vêem um restaurante com comida cheirosa, mas sem funcionários, eles decidem comer e pagar mais tarde. No entanto, Chihiro se recusa a comer e decide explorar um pouco mais o parque temático. Ela conhece um menino chamado Haku, que diz a ela que Chihiro e seus pais estão em perigo e que eles devem partir imediatamente. Ela corre para o restaurante e descobre que seus pais se transformaram em porcos. Além disso, o parque temático acaba sendo uma cidade habitada por demônios, espíritos e deuses malignos. No centro da cidade há um balneário onde essas criaturas vão para relaxar. A dona da casa de banho é a malvada bruxa Yubaba, que pretende manter todos os invasores como trabalhadores cativos, incluindo Chihiro. Chihiro deve confiar em Haku para salvar seus pais na esperança de retornar ao seu mundo.",
    "Enquanto protegia sua aldeia da fúria do deus/demônio javali, um jovem guerreiro confiante, Ashitaka é atingido por uma maldição mortal. Para salvar sua vida, ele deve viajar para as florestas do oeste. Uma vez lá, ele se envolve em uma campanha feroz que os humanos estavam travando na floresta. A ambiciosa Lady Eboshi e seu clã leal usam suas armas contra os deuses da floresta e uma jovem corajosa, a Princesa Mononoke, que foi criada por um deus-lobo. Ashitaka vê o lado bom de ambos os lados e tenta conter a torrente de sangue. Isso é enfrentado pela animosidade de ambos os lados, pois cada um deles o vê como apoiando o inimigo.",
    "No início dos anos 1930, piratas aéreos da Itália, caçadores de recompensas e aviadores de todos os tipos governam os céus. O mais astuto e habilidoso desses pilotos é Porco Rosso. Ex-Ace, ele agora ganha a vida voando em empregos contratados, como resgatar sequestrados por piratas aéreos. Donald Curtis, o rival de Porco no ar e em conquistar o afeto das mulheres, oferece um desafio constante ao herói, culminando em um final hilariante e cheio de ação.",
    "Esta é a história de uma jovem bruxa, chamada Kiki, que agora tem 13 anos. Mas ela ainda é um pouco verde e muito teimosa, mas também engenhosa, imaginativa e determinada. Com seu fiel filhote de gato falante chamado Jiji ao seu lado, ela está pronta para enfrentar o mundo, ou pelo menos a estranha vila costeira europeia que ela escolheu como seu novo lar.",
    "Duas meninas, Satsuki, de 10 anos, e sua irmã Mei, de 4, mudam-se para uma casa no campo com o pai para ficarem mais perto da mãe hospitalizada. Satsuki e Mei descobrem que a floresta próxima é habitada por criaturas mágicas chamadas Totoros. Elas logo se tornam amigas desses Totoros e têm várias aventuras mágicas.",
    "Um menino encontra uma garota misteriosa que cai do céu. A menina, Sheeta, foi perseguida por piratas, agentes secretos do exército e do governo. Para salvar sua vida, eles começam uma aventura voadora que passa por todos os tipos de máquinas voadoras, eventualmente procurando pela identidade de Sheeta em um castelo flutuante de uma civilização perdida."
];

var trailler = [
    "https://www.youtube.com/embed/Td25KusvzME",
    "https://www.youtube.com/embed/YfSPHbB3KaE",
    "https://www.youtube.com/embed/CsR3KVgBzSM",
    "https://www.youtube.com/embed/iwROgK94zcM",
    "https://www.youtube.com/embed/ByXuk9QqQkk",
    "https://www.youtube.com/embed/4OiMOHRDs14",
    "https://www.youtube.com/embed/awEC-aLDzjs",
    "https://www.youtube.com/embed/4bG17OYs-GA",
    "https://www.youtube.com/embed/92a7Hj0ijLs",
    "https://www.youtube.com/embed/8ykEy-yPBFc"
];

var cont = 0;

function preencherPagina(comeco, fim, pagina) {
    if (cont != pagina) {
        document.getElementById("filmes").innerHTML = "";
        for (var i = comeco; i >= fim; i--) {
            document.getElementById("filmes").innerHTML = document.getElementById("filmes").innerHTML +
                "<h1>" + titulo[i] +
                "</h1>" + "<img src=" + poster[i] + ">" +
                "<h4>Título original: " + tituloOriginal[i] +
                "</h4>" + "<p>Data de lançamento no Brasil: " + data[i] + "</p>" +
                "<p>Sinopse: " + sinopse[i] +
                "</p>" + '<iframe id="trailler" width="560" height="315" src="' + trailler[i] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
        cont = pagina;
    }
}