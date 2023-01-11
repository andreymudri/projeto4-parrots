let contador = 0;
let qtscartas = 10;







while (qtscartas >= contador) {
    const cardsContainer = document.querySelector('.cards-container');

    cardsContainer.innerHTML += `
    <!-- start card-->
    <div data-test="card">
        <div class="face-down">
            <img src="./assets/img/back.png" alt="back-card" data-test="face-down-image">
        </div>
        <div class="face-up">
            <img src="./assets/img/bobrossparrot.gif" alt="faceup">
        </div>
    </div>
            <!-- start card-->`;
    contador++;
    
}
    




/* const qtscartas = prompt('quantas cartas deseja jogar?numero par de 4 a 14')




let minhArray =[];

function comparador() { 
	return Math.random() - 0.5; 
}

function startgame()

minhaArray.sort(comparador);












*/