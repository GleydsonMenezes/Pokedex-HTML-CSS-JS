function converPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`  )
}



function convertPokemonToLi(poke){
    return  `
        <li class="poke">
        <span class="number">#${poke.order}</span>
        <span class="name">${poke.name}</span>


        <div class="detail">
            <ol class="types">
                ${converPokemonTypesToLi(poke.types).join(' ')}
            </ol>

            <img src="${poke.sprites.other.dream_world.front_default}" alt="${poke.name}">
        </div>
    </li>
    `
}

const pokemonOl = document.getElementById('pokemonList')


pokeApi.getPokemon().then((pokemonList = []) => {
    const newHtml = pokemonList.map(convertPokemonToLi).join('')
    pokemonOl.innerHTML = newHtml
})