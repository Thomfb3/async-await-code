let url = `http://numbersapi.com`;

//1
$("#favorite-number-form").submit((evt) => {
    evt.preventDefault();
    axios.get(`${url}/${$("#favorite-number").val()}`)
        .then(res => {
            $("#number-fact-res").text(res.data);
            console.log(res.data);
        })
        .catch(err => console.log("REJECTED!!", err));
});


//2


const $multipleFavNumRes = $("#multiple-fav-num-res");

$("#multiple-fav-num-form").submit((evt) => {
    evt.preventDefault();
    axios.get(`${url}/${$("#multiple-fav-num-1").val()}`)
        .then(res => {
            $multipleFavNumRes.html(`<p class='pt-3'>1. ${res.data}</p>`);
            return axios.get(`${url}/${$("#multiple-fav-num-2").val()}`)
        })
        .then(res => {
            $multipleFavNumRes.append(`<p class='pt-3'>2. ${res.data}</p>`);
            return axios.get(`${url}/${$("#multiple-fav-num-3").val()}`)
        })
        .then(res => {
            $multipleFavNumRes.append(`<p class='pt-3'>2. ${res.data}</p>`);
        })
        .catch(err => console.log("REJECTED!!", err));
});



//3

const $multipleNumFactsRes = $("#multiple-num-facts-res");

$("#multiple-num-facts-form").submit((evt) => {
    evt.preventDefault();
    const $multipleNumFactsInputValue = $("#multiple-num-facts-input").val();

    axios.get(`${url}/${$multipleNumFactsInputValue}`)
        .then(res => {
            $multipleNumFactsRes.html(`<p class='pt-3'>1. ${res.data}</p>`);
            return axios.get(`${url}/${$multipleNumFactsInputValue}`)
        })
        .then(res => {
            $multipleNumFactsRes.append(`<p class='pt-3'>2. ${res.data}</p>`);
            return axios.get(`${url}/${$multipleNumFactsInputValue}`)
        })
        .then(res => {
            $multipleNumFactsRes.append(`<p class='pt-3'>3. ${res.data}</p>`);
            return axios.get(`${url}/${$multipleNumFactsInputValue}`)
        })
        .then(res => {
            $multipleNumFactsRes.append(`<p class='pt-3'>4. ${res.data}</p>`);
            return axios.get(`${url}/${$multipleNumFactsInputValue}`)
        })
        .catch(err => console.log("REJECTED!!", err));
});





    // .then(res => {
    //     console.log(res.data);
    //     return axios.get(res.data.residents[0])
    // })
    // .then(res => {
    //     console.log(res.data);
    //     return axios.get(res.data.films[0])
    // })
    // .then(res => {
    //     console.log(res);
    // })