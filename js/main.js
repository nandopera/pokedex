

function pokemonLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.num}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type">${type}</li>`)
                  .join("")}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}"></div>
    </li>`;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = ['']) => {
    const newHtml = pokemons.map(pokemonLi).join('')
    pokemonList.innerHTML = newHtml

})