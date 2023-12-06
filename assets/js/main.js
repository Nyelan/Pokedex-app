// async function logMovies() {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");
//     const movies = await response.json();
//     console.log(movies);
//   }

//   logMovies();

// import { PokeAPI } from "./pokeApi";

import { PokeAPI } from "./pokeApi.js";

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemonCont">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg">
                </div>
            </li>
    `
}

const pokemonListHtml = document.getElementById("pokemonList");

const poke_api = new PokeAPI();

poke_api.getPokemons().then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemonListHtml.innerHTML += convertPokemonToLi(pokemon);       
    }
})
    



  