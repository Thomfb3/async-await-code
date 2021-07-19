//Url is followed by a pokemon name or ID number
let baseURL = `https://pokeapi.co/api/v2/pokemon`
////There are 898 Pokemon in the database

let $pokemonForm = $("#pokemon-form")
let $pokemonContainer = $("#pokemon-container")

const randomPokeId = () => {
    return Math.floor(Math.random() * 898);
}

const findEnglishFlavorText = (arrOfOjects) => {
    for (obj of arrOfOjects) {
        if (obj.language.name === "en") {
            return obj.flavor_text;
        }
    }
    return "No English Found.";
};

///Pookemon class
class Pokemon {
    constructor(id) {
        this.id = id;
        this.markup = "";
        this.englishFlavorText = "";
    };

    async init() {
        let res = await axios.get(`${baseURL}/${this.id}`);
        this.image = res.data.sprites.other["official-artwork"]["front_default"];
        this.name = res.data.name;
        this.speciesURL = res.data.species.url;
        this.getFlavorText();
    };


    async getFlavorText() {
        let res = await axios.get(`${this.speciesURL}`);
        this.englishFlavorText = findEnglishFlavorText(res.data.flavor_text_entries);
    }

    createMarkup() {
        this.markup = `<div class="col">
                    <div class="card" style="width: 18rem; height: 100%;">
                        <img src="${ this.image}" class="card-img-top pokemon-image" alt="...">
                        <div class="card-body">
                            <h3 class="pokemon-name">${this.name}</h3>
                            <p id="one" class="card-text pokemon-species-flavor-text">${this.englishFlavorText}</p>
                        </div>
                    </div>
                </div>`;

        return this.markup;
    }
};



///Make three Pokemon
let pokemonArray = [];

function createPokemon() {
    let p1 = new Pokemon(randomPokeId());
    let p2 = new Pokemon(randomPokeId());
    let p3 = new Pokemon(randomPokeId());

    p1.init()
        .then(() => {
            p2.init();
        })
        .then(() => {
            p3.init();
        })
        .then(() => {
            pokemonArray = [p1, p2, p3];
            $("#create-pokemon").removeClass("d-none");
        })
        .catch((e) => {
            console.log(e);
        });

    return pokemonArray;
};


createPokemon();

/////Form submit to show pokemon
$pokemonForm.submit((evt) => {
    evt.preventDefault();

    $pokemonContainer.html("");

    pokemonArray.forEach( pokemon => {
        $pokemonContainer.append(pokemon.createMarkup());

    })
    createPokemon();

});





