const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

function pokemonLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
        <img src="https://toppng.com/public/uploads/thumbnail/bulbasaur-bulbasaur-pokemo-11563616517rwjijmefdz.png" alt="${pokemon.name}"></div>
    </li>`;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons) => {
    for (var i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i]
        pokemonList.innerHTML += pokemonLi(pokemon)
    }
})