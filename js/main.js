const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreBtn");

const maxRecords = 151
const limit = 10
let offset = 0



function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      const newHtml = pokemons
        .map(
          (pokemon) =>
            `
            <li class="pokemon-item pokemon ${pokemon.type}" data-id="${
              pokemon.id
            }">
                <span class="number">#${pokemon.num}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types
                          .map(
                            (type) => `<li class="type ${type}">${type}</li>`
                          )
                          .join("")}
                    </ol>
                      
                    <img src="${pokemon.photo}" alt="${pokemon.name}"></div>
            </li>
            
            `
        )
        .join("");
        pokemonList.innerHTML += newHtml
    });
}
const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector("#closeModal");
const callPokeDetail = document.querySelector(".pokemon-item");
// Adicione um manipulador de eventos ao elemento pai existente (pokemonList)
/* pokemonList.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'btn-detail') {
    modal.showModal();
  }
}); */
pokemonList.addEventListener("click", (e) => {
  const clickedPokemonItem = e.target.closest(".pokemon-item");
  if (clickedPokemonItem) {
    modal.showModal();
  }
});

closeModalButton.addEventListener('click', () => {
  modal.close();
});

const modalTitle = document.querySelector("#modal h2");
const modalDescription = document.querySelector("#modal p");

// Função para carregar detalhes de um Pokémon no modal
function loadPokemonDetails(pokemon) {
  // Atualize o título do modal
  modalTitle.textContent = pokemon.name;

  // Atualize a descrição do modal
  modalDescription.textContent = pokemon.description;

  // Outras atualizações de elementos do modal, se necessário
}

function loadPokemonDetails(pokemonId) {
  // Verifique se o Pokémon com o ID existe no objeto pokemonData
  if (pokemonData[pokemonId]) {
    const pokemon = pokemonData[pokemonId];

    // Atualize o conteúdo do modal com os detalhes do Pokémon
    modal.querySelector("h2").innerHTML = pokemon.name;
    modal.querySelector("p").innerHTML = pokemon.description;
    // Atualize outras informações do modal conforme necessário
    

    // Abra o modal
    modal.showModal();
  }
}



loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    
    const qtdRecordNextPage = offset + limit

    if ((qtdRecordNextPage) >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})