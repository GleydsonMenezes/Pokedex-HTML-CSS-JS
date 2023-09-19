
function convertPokemonToLi(poke){
    return  `
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
    `
}

const pokemonOl = document.getElementById('pokemonList')


pokeApi.getPokemon().then((pokemonList = []) => {
    const newHtml = pokemonList.map(convertPokemonToLi).join('')
    pokemonOl.innerHTML = newHtml
})