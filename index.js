// 1. Player 1 and 2
// 2. Build a deck
// 3. Split the deck
// 4. Player 1 and Player 2 draw random cards
// 5. If player card is higher, that player wins the cards
// 5. Add those cards to player's deck
// 6. If player cards tie, they redraw and repeat step 4 and 5

onst suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

// class Card {
// 	constructor(rank, suit) {
// 		this.suit = suit
// 		this.rank = rank
// 		this.score = rankScores[rank]
// 		this.title = `${rank} of ${suit}`
// 	}
// }

//build a deck
class Deck {
	constructor( ) {
		this.cards = []
	}
	createNewDeck() {
		for(let i =0; i < suits.length; i++ ) {
			for(let j = 0; j < ranks.length; j++) {
				this.cards.push( new Card (ranks[j], suits[i] ) )
			}
		}
	}
}

//shuffle the deck

// function shuffle (deck) {
// 	for( let i = deck.length - 1; i > 0; i-- ) {
// 		let j = Math.floor(Math.random() * (i+1))
// 		let temp = deck[i]
// 		deck[i] = deck[j]
// 		deck[j] = temp
// 	}
// }

let testDeck = new Deck()
testDeck.createNewDeck()
console.log( testDeck )

let shuffleDeck = shuffle( testDeck )
console.log(shuffleDeck)

// let testDeck = new Deck()
// testDeck.createNewDeck()

// console.log( testDeck )
