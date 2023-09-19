
const pokemonOl = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;



function loadPokemonItens(offset, limit){
    pokeApi.getPokemon(offset, limit).then((pokemonList = []) => {
        const newHtml = pokemonList.map((poke) => `
            <li class="poke ${poke.type}">
            <span class="number">#${poke.number}</span>
            <span class="name">${poke.name}</span>


            <div class="detail">
                <ol class="types">
                    ${poke.types.map((type) => `<li class="type ${type}">${type}</li>`).join(' ')}
                </ol>

                <img src="${poke.photo}" alt="${poke.name}">
            </div>
        </li>   
        `).join('')
        pokemonOl.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit


    if (qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }

})