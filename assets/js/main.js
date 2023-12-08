import { PokeAPI } from "./pokeApi.js";

function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemonCont">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join("")}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}">
                </div>
            </li>
    `
}

const pokemonListHtml = document.getElementById("pokemonList");

const poke_api = new PokeAPI();

poke_api.getPokemons().then((pokemons = []) => {
    pokemonListHtml.innerHTML += pokemons.map(convertPokemonToLi).join("");
})
    



  