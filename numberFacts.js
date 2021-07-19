let numberUrl = `http://numbersapi.com`;

////////////1
async function getOneNumberFact(url, inputValue) {
    try {
        let numberFacts = await axios.get(`${url}/${inputValue}`);
        $("#number-fact-res").text(numberFacts.data);
    }
    catch (e) {
        console.log("REJECTED!! That didn't work.", e)
    }
}


$("#favorite-number-form").submit((evt) => {
    evt.preventDefault();
    getOneNumberFact(numberUrl, $("#favorite-number").val())

});





////////////2
const $factsOfMultipleNumbersResults = $("#multiple-fav-num-res");

async function getFactsOfMultipleNumbers(url) {
    try {
        let facts = await Promise.all([
            axios.get(`${url}/${$("#multiple-fav-num-1").val()}`),
            axios.get(`${url}/${$("#multiple-fav-num-2").val()}`),
            axios.get(`${url}/${$("#multiple-fav-num-3").val()}`)
        ]);

        $factsOfMultipleNumbersResults.html("")

        for (let fact of facts) {
            $factsOfMultipleNumbersResults.append(`<p class='pt-3'>FACT: ${fact.data}</p>`);
        }
    }
    catch (e) {
        console.log("REJECTED!! That didn't work.", e)
    }
}



$("#multiple-fav-num-form").submit((evt) => {
    evt.preventDefault();

    getFactsOfMultipleNumbers(numberUrl);
});





////////////3
const $multipleNumFactsResults = $("#multiple-num-facts-res");


async function getMultipleNumberFacts(url, inputValue) {
    try {
        let facts = await Promise.all([
            axios.get(`${url}/${inputValue}`),
            axios.get(`${url}/${inputValue}`),
            axios.get(`${url}/${inputValue}`),
            axios.get(`${url}/${inputValue}`),
            axios.get(`${url}/${inputValue}`)
        ]);

        $multipleNumFactsResults.html("")

        let counter = 1;
        for (let fact of facts) {
            $multipleNumFactsResults.append(`<p class='pt-3'>${counter}. ${fact.data}</p>`);
            counter++;
        }
    }
    catch (e) {
        console.log("REJECTED!! That didn't work.", e)
    }
}


$("#multiple-num-facts-form").submit((evt) => {
    evt.preventDefault();

    let multipleNumFactsInputValue = $("#multiple-num-facts-input").val();

    getMultipleNumberFacts(numberUrl, multipleNumFactsInputValue);

});






