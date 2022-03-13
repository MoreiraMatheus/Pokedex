const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card_do_pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        // troca de cards pokemon
        const cartaoPokeAberto = document.querySelector('.aberto')
        cartaoPokeAberto.classList.remove('aberto')

        const pokemonselecionado = pokemon.attributes.id.value

        const pokemonParaAbrir = document.getElementById('card_'+ pokemonselecionado)
        pokemonParaAbrir.classList.add('aberto')
        
        // troca a cor do pokemon selecionado na navegação
        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')

        const pokemonSelecionadoListagem = document.getElementById(pokemonselecionado)
        pokemonSelecionadoListagem.classList.add('ativo')
    })
})