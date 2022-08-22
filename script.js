let tamanho;
let vetorImagem = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];
let clickBooleano = false;
let primeiraCarta;
let cliques;
let cliquesdois;
let comparador;

function adicionaCartas() {
    let container = document.querySelector('.container');
    let vetorCartas = [];

    cliques = 0;
    cliquesdois = 0;
    comparador = 0;
    tamanho = prompt('Com quantas cartas você deseja jogar?');

    while(tamanho < 4 || tamanho > 14 || tamanho%2 != 0) {
        tamanho = prompt('Quantidade inválida, insira uma quantidade válida de cartas');
    }

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

function viraCarta(carta) {
    cliquesdois++; 
    if(cliquesdois > 2) {
        return;
    } // não mexer

    carta.classList.add('virar');
    carta.removeAttribute('onClick');
    cliques++; 
    if(clickBooleano) {
        if(primeiraCarta.children[1].getAttribute('src') === carta.children[1].getAttribute('src')) {
            carta.removeAttribute('onClick');
            primeiraCarta.removeAttribute('onClick');
            comparador++;
            if(comparador === parseInt(tamanho/2)) {
                setTimeout(() => {
                    alert(`Você ganhou em ${cliques} jogadas! `);                    
                    let jogarDeNovo;
                    while(jogarDeNovo !== 'sim' && jogarDeNovo !== 'não') {
                        jogarDeNovo = prompt('Quer jogar de novo?');
                    }

                    if(jogarDeNovo === 'sim') {
                        reiniciaJogo();
                        adicionaCartas();
                    }
                }, 1000);
            }

            cliquesdois = 0;
        } else {
            setTimeout(() => {
                carta.classList.remove('virar');
                primeiraCarta.classList.remove('virar');
                cliquesdois = 0;
                primeiraCarta.setAttribute('onClick', 'viraCarta(this)');
                carta.setAttribute('onClick', 'viraCarta(this)');                
            }, 1000);
        }

        clickBooleano = false;
    } else {
        clickBooleano = true;
        primeiraCarta =  carta;
        console.log(primeiraCarta);
    }
}

function reiniciaJogo() {
    let container = document.querySelector('.container');
    for(let i = 0; i < tamanho; i++) {
        container.removeChild(container.children[0]);
    }
}

adicionaCartas();