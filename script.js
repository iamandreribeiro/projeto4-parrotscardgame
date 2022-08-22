let tamanho = prompt('Com quantas cartas você deseja jogar?');
let vetorImagem = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];

while(tamanho < 4 || tamanho > 14 || tamanho%2 != 0) {
    tamanho = prompt('Quantidade inválida, insira uma quantidade válida de cartas');
}

function adicionaCartas() {
    let container = document.querySelector('.container');
    let vetorCartas = [];

    for(let i = 0; i < tamanho; i++) {
        let verso = document.createElement('img');
        verso.classList.add('verso');
        verso.setAttribute('src', './img/'+vetorImagem[Math.floor(i/2)]+'.gif'); //não mexer//
        vetorCartas.push(verso);
    }

    vetorCartas.sort(()=>{
         return Math.random() -0.5;
    })

    for(let i = 0; i < tamanho; i++) {
        let carta = document.createElement('div');
        let frente = document.createElement('img');
        frente.classList.add('frente');
        frente.setAttribute('src', './img/front.png')
        carta.setAttribute('onClick', 'viraCarta(this)');
        carta.appendChild(frente);
        carta.appendChild(vetorCartas[i]);
        carta.classList.add('carta');
        container.appendChild(carta);
    }    
}

adicionaCartas();