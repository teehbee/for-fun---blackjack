// let player = {
//   name: "Tor-Håkon",
//   chips: 145,
// };
// For future implementation

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let blackJackMessage = document.querySelector("#blackjack-message");
let blackJackSum = document.querySelector("#blackjack-sum");
let blackJackCards = document.querySelector("#blackjack-cards");

// let blackJackPlayer = document.querySelector("#blackjack-player");
// blackJackPlayer.textContent = player.name + ": $" + player.chips;
// For future implementation

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  blackJackCards.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    blackJackCards.textContent += cards[i] + " ";
  }

  blackJackSum.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  blackJackMessage.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
