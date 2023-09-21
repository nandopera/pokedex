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

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(pokemonLi).join('')
    pokemonList.innerHTML = newHtml

})