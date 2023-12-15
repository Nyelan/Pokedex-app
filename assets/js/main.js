import { PokeAPI } from "./pokeApi.js";

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemonCont">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join("")}
                    </ol>
                    <img src="${pokemon.sprite}">
                </div>
            </li>
    `
}

const pokemonListHtml = document.getElementById("pokemonList");

const poke_api = new PokeAPI();

poke_api.getPokemons().then((pokemons = []) => {
    pokemonListHtml.innerHTML += pokemons.map(convertPokemonToLi).join("");
})
    



  