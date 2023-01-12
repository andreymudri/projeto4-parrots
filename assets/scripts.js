let cartaum, cartadois;
let cards = [];
let cartas = [];
const cardsContainer = document.querySelector('.cards-container');

const images = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif'];
const qtscartas = prompt('quantas cartas deseja jogar?numero par de 4 a 14');
const pares = qtscartas / 2;
function startGame(qtscartas) {
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
        if (cartaum.querySelector('.frente').getAttribute('src') === cartadois.querySelector('.frente').getAttribute('src')) {
            cartaum.classList.add('is-matched');
            cartadois.classList.add('is-matched');
            if(document.querySelectorAll('.is-matched').length === cards.length){
                setTimeout(() => {
                    alert("game over")
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
}
function viracarta(card) {
    card.classList.toggle('is-flipped');
    checarCartas();
    return
    }