let cartaum, cartadois;
let cards = [];
const cardsContainer = document.querySelector('.cards-container');
let jogadas = 0;
let qtscartas;
const images = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];



while (qtscartas % 2 !== 0 || qtscartas < 4 || qtscartas > 14) {
     qtscartas = prompt('quantas cartas deseja jogar?numero par de 4 a 14');
    if(qtscartas === null) {
        // caso cancelar
    }    
    qtscartas = parseInt(qtscartas);
    if (qtscartas % 2 !== 0 || qtscartas < 4 || qtscartas > 14) {
        alert("Input incorreto, por favor coloque um numero par entre 4 and 14.");
    }
}
const pares = qtscartas / 2;
startGame();

function startGame() {
    resetJogo()
    criarcartas(pares)
}
function criarcartas(qtscartas) { 
    for (let i = 0; i < qtscartas; i++){
        cards.push(images[i])
    }
    cards = cards.concat(cards);
    cards = shuffle(cards);
    for (let i = 0; i < cards.length; i++){
        cardsContainer.innerHTML += `
        <!-- start card-->
        <div data-test="card" class="card" onclick="viracarta(this)">
            <div class="face-down">
                <img src="./assets/img/back.png" alt="back-card" data-test="face-down-image">
            </div>
            <div class="face-up">
                <img src="./assets/img/${cards[i]}" alt="faceup" class="frente" data-test="face-up-image">
            </div>
        </div>
                <!-- start card-->`;        
    }
    return
}

function checarCartas() {
    let flippedCards = document.querySelectorAll('.is-flipped:not(.is-matched)');
    if (flippedCards.length === 2) {
        cartaum = flippedCards[0];
        cartadois = flippedCards[1];
        jogadas++;
        if (cartaum.querySelector('.frente').getAttribute('src') === cartadois.querySelector('.frente').getAttribute('src')) {
            cartaum.classList.add('is-matched');
            cartadois.classList.add('is-matched');
            if(document.querySelectorAll('.is-matched').length === cards.length){
                setTimeout(() => {
                    alert(`Você ganhou em ${jogadas} jogadas!`);
                            }, 1000);
                return;
            }else{
                checarCartas();
            }
        } else {
            setTimeout(() => {
                cartaum.classList.remove('is-flipped');
                cartadois.classList.remove('is-flipped');
            }, 1000);
        }
    }
}
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
function resetJogo() {    
    cardsContainer.innerHTML = "";
    jogadas = 0;
}
function viracarta(card) {
    card.classList.toggle('is-flipped');
    checarCartas();
    return
    }