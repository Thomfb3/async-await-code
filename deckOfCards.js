let baseURL = `http://deckofcardsapi.com/api/deck`;


class Deck {
    constructor() {
        this.cards = [];
        this.cardImages = [];
    };

    async init() {
        let res = await axios.get(`${baseURL}/new`);
        this.deckId = res.data.deck_id;
    };

    async shuffle() {
        let res = await axios.get(`${baseURL}/${this.deckId}/shuffle/`);
    };

    async drawCard(numberOfCards) {
        let res = await axios.get(`${baseURL}/${this.deckId}/draw/?count=${numberOfCards}`);
        res.data.cards.forEach(card => {
            this.cards.push(`<p id="draw-a-card" class="pb-1" >${card.value} of ${card.suit}</p>
            <img id="draw-a-card-image" class="mb-3" width="150px" src="${card.image}">`)
        });
        
        res.data.cards.forEach(card => {
            this.cardImages.push(card.image)
        });
    };
};



////////////1
const deck = new Deck;

deck.init()
.then(() => {
   return deck.shuffle();
})
.then(() => {
    return deck.drawCard(4);
})
.then(() => {
    $("#draw-one-btn").removeClass("d-none");
    $("#draw-two-btn").removeClass("d-none");
    $("#draw-deck-btn").removeClass("d-none");
})
.catch((e) => {
    console.log(e);
    alert(`${e}.\r\nPlease refresh and try again.`)
});


function displayOneCard() {
    $("#draw-one").html(`${deck.cards[0]}`);
}



////////////2
function displayTwoCards() {
    $("#draw-two").html(deck.cards[1]);
    $("#draw-two").append(deck.cards[2]);
}



////////////3
const $drawCardForm = $("#draw-card-form")
const $cardContainer = $("#card-container");


const randomDegree = () => {
    return 45 - (Math.floor(Math.random() * 90));
}

const randomTop = () => {
    return 10 - (Math.floor(Math.random() * 20));
}

$drawCardForm.submit((evt) => {
    evt.preventDefault();

    // $cardContainer.append(`${deck3.cards[deck3.cards.length -1]}`);
    $cardContainer.append(`<img src='${deck.cardImages[deck.cardImages.length-1]}' style='position:absolute; right:40%; margin-top:${randomTop()}px ; transform: rotate(${randomDegree()}deg);' >`)

    deck.drawCard(1);

})




