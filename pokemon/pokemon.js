// 속도 개선은 어떻게??

const form = document.querySelector('#searchForm');
const pokemonList = document.querySelector('.pokemonList');
const pokeAPI = 'http://pokeapi.co/api/v2/pokemon/';
const resetBtn = document.querySelector('#resetBtn');
const pokemonImgArr = document.querySelectorAll('.pokemonList img');

const makePokemon = (pokemon) => {
	const list = document.createElement('LI');
	const pokeImg = document.createElement('IMG');
	const pokeNum = document.createElement('P');
	const pokeName = document.createElement('P');
	pokeImg.src = pokemon.sprites.front_default;
	pokeNum.innerText = `#${pokemon.id}`;
	pokeName.innerText = pokemon.name.toUpperCase();

	list.append(pokeNum);
	list.append(pokeImg);
	list.append(pokeName);
	return list;
};

const addPokemon = (pokemon) => {
	if (pokemon) {
		pokemonList.append(makePokemon(pokemon));
	}
	form.elements.pokeInput.value = '';
};

const removeAllPokemon = () => {
	while (pokemonList.firstChild) {
		pokemonList.removeChild(pokemonList.firstChild);
	}
};

const removeClickedPokemon = function () {
	console.log(this);
};

// event bubbling, event delegation
for (pokemonImg of pokemonImgArr) {
	pokemonImg.addEventListener('click', removeClickedPokemon);
}

resetBtn.addEventListener('click', removeAllPokemon);

form.addEventListener('submit', async function (e) {
	let pokemonInput = '';
	try {
		e.preventDefault();
		pokemonInput = form.elements.pokeInput.value.toLowerCase();
		const res = await axios.get(`${pokeAPI}${pokemonInput}`);
		addPokemon(res.data);
	} catch (e) {
		alert(`Wrong Input, pokemon >>${pokemonInput}<< does not exist!`);
		console.log(e);
		form.elements.pokeInput.value = '';
	}
});
