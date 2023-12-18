import { PokemonMain } from "./pokemon-model.js";

export class PokeAPI{

    convertPokeApiDetailToPokemon(pokeDetail){
        
        const pokemon = new PokemonMain();

        pokemon.order = pokeDetail.order;
        pokemon.name = pokeDetail.name;

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
        const [type] = types;
        pokemon.types = types;
        pokemon.type = type;

        pokemon.sprite = pokeDetail.sprites.other.dream_world.front_default

        return pokemon;
    }

    getPokemonDetail = (pokemon) => {
        return fetch(pokemon.url)
            .then((response) => response.json())
            .then(this.convertPokeApiDetailToPokemon)
    }

    getPokemons = (offset, limit) => {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
        return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(this.getPokemonDetail))
            .then((detailRequests) => Promise.all(detailRequests))
            .then((pokemonsDetails) => pokemonsDetails)
    }

    

}
