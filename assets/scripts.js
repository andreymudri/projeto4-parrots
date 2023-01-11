let contador = 0;
let qtscartas = 10;
let minhaArray = []
let cartaum, cartadois;





function comparador() { 
	return Math.random() - 0.5; 
}

minhaArray.sort(comparador);

function startGame(qtscartas) {
/* const qtscartas = prompt('quantas cartas deseja jogar?numero par de 4 a 14')
*/
while (qtscartas > contador) {
    const cardsContainer = document.querySelector('.cards-container');

    cardsContainer.innerHTML += `
    <!-- start card-->
    <div data-test="card" class="card" onclick="viracarta(this)">
        <div class="face-down">
            <img src="./assets/img/back.png" alt="back-card" data-test="face-down-image">
        </div>
        <div class="face-up">
            <img src="./assets/img/bobrossparrot.gif" alt="faceup" class="frente" data-test="face-up-image">
        </div>
    </div>
            <!-- start card-->`;
    contador++;    
}
}

function viracarta(card) {
    card.classList.toggle('is-flipped');
}
startGame(10)