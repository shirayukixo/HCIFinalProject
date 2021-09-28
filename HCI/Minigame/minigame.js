// Functions 
function run() { // Run the game when HTML page is loaded
    var cards = Array.from(document.getElementsByClassName('card'));
    var game = new MixOrMatch(cards);

    game.startGame();

    cards.forEach(card=> {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}

function playSound(url) { // Play sound based on the inserted URL
    let sound = new Audio(url);
    sound.volume = 0.3;
    sound.play();
}

// Classes
class MixOrMatch {
    constructor(cards) {
        this.cardsArray = cards;
        this.addFlipCount = document.getElementById('flips');
    }

    // Set the game to default
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.matchedCards = [];
        this.busy = false;

        this.shuffleCards();
    }

    // Shuffle the card
    shuffleCards() {
        for (let i = this.cardsArray.length-1; i > 0; i--) {
            let rand = Math.floor(Math.random() * (i+1));
            // use CSS grid's order property to randomise instead
            this.cardsArray[rand].style.order = i;
            this.cardsArray[i].style.order = rand;
        }
    }

    // Flip the card when user CLICKED on a card
    flipCard(card) { 
        if (this.canFlip(card)) {
            this.totalClicks++;
            this.addFlipCount.innerText = this.totalClicks;
            // Whenever a click is clicked, add "visible" to the class "card" in html
            card.classList.add('visible');

            if (this.cardToCheck) {
                this.checkMatch(card);
            } else {
                this.cardToCheck = card;
            }
        }
    }

    // Unflip the card when NOT MATCHED
    unflipCard() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }

    // Return the Card's Class name as String
    getCardType(card) {
        return card.getElementsByClassName('value')[0].className;
    }

    // Validate whether or not the user can flip the card
    canFlip(card) { 
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }

    // Check if card is matched
    checkMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
            this.cardMatched(card, this.cardToCheck);
            console.log("Match!");
            playSound('audio/matched.wav');
        } else {
            this.cardMisMatched(card, this.cardToCheck);
            console.log("not match");
        }

        this.cardToCheck = null;
    }

    // Function to activate if card matched
    cardMatched(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('card_matched');
        card2.classList.add('card_matched');
        // Can play audio if MATCHED
        if (this.matchedCards.length === this.cardsArray.length) {
            this.victory();
            // change to u win to here
        }
    }

    // Function to activate if card mismatched
    cardMisMatched(card1, card2) {
        this.busy = true;
        setTimeout(() => { // This function gives a time interval if user mismatched the cards, so the card doesn't unflip instantly
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000)
    }

    // Victory
    victory() { 
        console.log("You win!");

        var victoryText = "Congratulation you won! Now, with that knowledge in hand, it's better for you to spread it out to the adults and take action in saving these animals!";
        document.getElementById('game_facts').innerText = victoryText;

        setTimeout(() => {
            playSound('audio/victory.wav');
        }, 900);

        setTimeout(() => {
            window.location.replace('../World Map/main.html');
        }, 10000);
    }
}

// Load the game once the document is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run());
} else {
    run();
}
