
const cards = Array.from(document.getElementsByClassName('card'));
let allowedTurns = 2;
let cardValueTurnOne, cardValueTurnTwo;
let firstTurn = false;

cards.forEach(card => {
    card.addEventListener('click', checkTurn);
})

console.log(cards);


function checkTurn() {

    if(allowedTurns == 2 && this.classList.contains('clickable')) {
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnOne = this;
        allowedTurns--;
        console.log(allowedTurns, cardValueTurnOne);
    } else
    if(allowedTurns == 1 && this.classList.contains('clickable')) {
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnTwo = this;
        console.log(allowedTurns, cardValueTurnTwo,'Dit was de laatste');
        allowedTurns--;
       
        
            if(cardValueTurnOne.textContent === cardValueTurnTwo.textContent) {
                setTimeout(() => {
                    allowedTurns = 2;
                }, 1500);
            } else {
                setTimeout(() => {
                    cardValueTurnTwo.classList.remove('visible');
                    cardValueTurnOne.classList.remove('visible');
                    allowedTurns = 2;
                }, 1500);
                cardValueTurnOne.classList.add('clickable');
                cardValueTurnTwo.classList.add('clickable');
                
            }
        }
    }


/* Bijna goed! Probleem zit in de eerste kaart. Wanneer de tweede niet matcht, krijg ik de eerste kaart niet meer omgedraaid...
function checkTurn() {
    if(allowedTurns == 2 && this.classList.contains('clickable')) {
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnOne = this.innerText;
        allowedTurns--;
        console.log(allowedTurns, cardValueTurnOne);
    } else
    if(allowedTurns == 1 && this.classList.contains('clickable')) {
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnTwo = this.innerText;
        console.log(allowedTurns, cardValueTurnTwo,'Dit was de laatste');
        allowedTurns--;
       
        
            if(cardValueTurnOne === cardValueTurnTwo) {
                allowedTurns = 2;
            } else {
                setTimeout(() => {
                    this.classList.remove('visible');
                }, 1500);
                this.classList.add('clickable');
                allowedTurns = 2;
            }
        }
    }
 */





/*Too difficult to evaluate. Better try to separate turn 1 and turn 2. */
/*Try 1 */
/* function selectCard() {
    if(this.classList.contains('clickable')&&allowedTurns > 0) {
        this.classList.remove('clickable');
        this.classList.add('visible');
        allowedTurns--;
        console.log(allowedTurns);
        cardValueTurnOne = this.innerText;
        console.log(cardValueTurnOne);
        evaluateCards();
    }
}

console.log(cardValueTurnOne);

function evaluateCards() {
    console.log('check match'); 
} */
