import { PokeAPI } from "./pokeApi.js";

const pokemonListHtml = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const poke_api = new PokeAPI();

const limit = 12;
let offset = 0;

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemons ${pokemon.type}">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.sprite}">
                </div>
            </li>
    `
}

function loadPokemonItens(offset, limit){
    poke_api.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join("");
        pokemonListHtml.innerHTML += newHtml;
})
}

loadPokemonItens(offset, limit);
    
loadMoreButton.addEventListener("click", () => {
    offset += limit;
    loadPokemonItens(offset, limit);
})


  