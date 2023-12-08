export class PokeAPI{

    getPokemonDetail(pokemon) {
        return fetch(pokemon.url).then((response) => response.json())
    }

    getPokemons(offset = 0, limit = 10){
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
        
        return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(this.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.log(error))
    }

}
