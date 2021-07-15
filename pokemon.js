//Url is followed by a pokemon name or ID number
let url = `https://pokeapi.co/api/v2/pokemon`
////There are 898 Pokemon in the database


let $pokemonForm = $("#pokemon-form")

let $pokemonContainer = $("#pokemon-container")

const randomPokeId = () => {
    return Math.floor(Math.random() * 898);
}
//Pokemon 1
$pokemonForm.submit((evt) => {
    evt.preventDefault();
    $pokemonContainer.html("");
    
    axios.get(`${url}/${randomPokeId()}`)
    .then(res => {
        //Pokemon 1 species
        console.log(res.data)
        let markUp1 = `<div class="col">
                            <div class="card" style="width: 18rem; height: 100%;">
                                <img src="${res.data.sprites.other["official-artwork"]["front_default"]}" class="card-img-top pokemon-image" alt="...">
                                <div class="card-body">
                                    <h3 class="pokemon-name">${res.data.name}</h3>
                                    <p id="one" class="card-text pokemon-species-flavor-text">
                            </div>
                        </div>
                    </div>`;

        $pokemonContainer.append(markUp1);

        return axios.get(`${res.data.species.url}`)
    })
    .then(res => {
        //Pokemon 1 species flavor text
        $("#one").text(findEnglishFlavorText(res.data.flavor_text_entries));

        return axios.get(`${url}/${randomPokeId()}`)
    })
    .then(res => {
        //Pokemon 2 species
        let markUp2 = `<div class="col">
                        <div class="card" style="width: 18rem; height: 100%;">
                            <img src="${res.data.sprites.other["official-artwork"]["front_default"]}" class="card-img-top pokemon-image" alt="...">
                            <div class="card-body">
                                <h3 class="pokemon-name">${res.data.name}</h3>
                                <p id="two" class="card-text pokemon-species-flavor-text">
                        </div>
                    </div>
                </div>`;

        $pokemonContainer.append(markUp2);

        return axios.get(`${res.data.species.url}`)
    })
    .then(res => {
        //Pokemon 2 species flavor text
        $("#two").text(findEnglishFlavorText(res.data.flavor_text_entries));

        return axios.get(`${url}/${randomPokeId()}`)
    })
    .then(res => {
        let markUp3 = `<div class="col">
                        <div class="card" style="width: 18rem; height: 100%;">
                            <img src="${res.data.sprites.other["official-artwork"]["front_default"]}" class="card-img-top pokemon-image" alt="...">
                            <div class="card-body">
                                <h3 class="pokemon-name">${res.data.name}</h3>
                                <p id="three" class="card-text pokemon-species-flavor-text">
                        </div>
                    </div>
                </div>`;

        $pokemonContainer.append(markUp3);

        return axios.get(`${res.data.species.url}`)
    })
    .then(res => {
        //Pokemon 3 species flavor text
        $("#three").text(findEnglishFlavorText(res.data.flavor_text_entries));
    })
    .catch(err => console.log("REJECTED!!", err));
})


const findEnglishFlavorText = (arrOfOjects) => {
    for (obj of arrOfOjects) {
        if (obj.language.name === "en") {
            return obj.flavor_text;
        }
    }
    return "No English Found."
}



