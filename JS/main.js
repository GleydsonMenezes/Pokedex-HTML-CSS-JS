function convertPokemonToLi(poke){
    return  `
        <li class="poke">
        <span class="number">#001</span>
        <span class="name">${poke.name}</span>


        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${poke.name}">
        </div>
    </li>
    `
}

const pokemonOl = document.getElementById('pokemonList')


pokeApi.getPokemon().then((pokemonList = []) => {
    const newHtml = pokemonList.map(convertPokemonToLi).join('')
    pokemonOl.innerHTML = newHtml
})