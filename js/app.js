const container = document.getElementById("container");

//Elegir número de pokemons a mostrar 
const numero_de_pokemons = 33;

//Colores de los pokemos
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5d4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    nomral: '#F5F5F5'
};

const main_tipos = Object.keys(colors);
console.log(main_tipos);

const fetchPokemons = async () => {
    for (let i = 1; i <= numero_de_pokemons; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    crearPokemon(pokemon);
}

fetchPokemons();

function crearPokemon(pokemon) {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('pokemon');

    const poke_tipo = pokemon.types.map(elemento => elemento.type.name);
    const type =  main_tipos.find(type => poke_tipo.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type];
    pokemonDiv.style.backgroundColor = color;
    const pokeInnnerHTML = `
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
    </div>
    <div class="informacion">
        <h3 class="numero">${name}</h3>
    </div>
    <div class="footer">
        <span class="nombre">#${pokemon.id.toString().padStart(3, 0)}</span> 
        <br>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `
;

    pokemonDiv.innerHTML = pokeInnnerHTML;
    container.appendChild(pokemonDiv);
}
//<span class="numero">#${pokemon.id.toString().padStart(3, 0)}</span> 