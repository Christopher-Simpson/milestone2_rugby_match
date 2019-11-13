const cards = document.querySelectorAll('.playing-card');

let cardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');

    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
    } else {
        cardFlipped = false;
        secondCard = this;

        matchCheck();
    }
}

function matchCheck() {
    if (firstCard.dataset.team === secondCard.dataset.team) {
        cardsMatch();
    } else {
        cardsMismatch();
    }
}

function cardsMatch() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function cardsMismatch() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}
//--------------------------------------------------------stops multiple flips--------------//
function resetBoard() {
    [cardFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
//---------------------------------------------------------------------------shuffle cards------------------//
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20)
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));