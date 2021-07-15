

// 1
let getNewShuffledDeck = `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
const $drawACard = $("#draw-a-card");
const $drawACardImage = $("#draw-a-card-image");


axios.get(getNewShuffledDeck)
    .then(res => {
        return axios.get(`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`);
    })
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        $drawACard.text(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        $drawACardImage.attr("src", `${res.data.cards[0].image}`)
    })
    .catch(err => console.log("REJECTED!!", err));


//2

const $drawOneCard = $("#draw-one-card");
const $drawOneCardImage = $("#draw-one-card-image");
const $drawTwoCard = $("#draw-two-card");
const $drawTwoCardImage = $("#draw-two-card-image");

let getNewShuffledDeck2 = `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;

axios.get(getNewShuffledDeck2)
    .then(res => {
        return axios.get(`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`);
    })
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        $drawOneCard.text(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        $drawOneCardImage.attr("src", `${res.data.cards[0].image}`)
        return axios.get(`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`);
    })
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        $drawTwoCard.text(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        $drawTwoCardImage.attr("src", `${res.data.cards[0].image}`)
    })
    .catch(err => console.log("REJECTED!!", err));



//3

const $drawCardForm = $("#draw-card-form")
const $cardContainer = $("#card-container");

const randomDegree = () => {
    return 45 - (Math.floor(Math.random() * 90));
}

const randomTop = () => {
    return 10 - (Math.floor(Math.random() * 20));
}


let getNewShuffledDeck3 = `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;

$drawCardForm.submit((evt) =>{
    evt.preventDefault();
    axios.get(getNewShuffledDeck3)
    .then(res => {
        return axios.get(`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`);
    })
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        $cardContainer.append(`<img src='${res.data.cards[0].image}' style='position:absolute; right:40%; margin-top:${randomTop()}px ; transform: rotate(${randomDegree()}deg);' >`)
    })
    .catch(err => console.log("REJECTED!!", err));
})


