const axios = require("axios");
const { Pokemon } = require("../db.js");
const { URL } = process.env;

const getPokemons = async (req, res) => {
  try {
    let pokemons = await Pokemon.findAll();

    // Fetch the list of Pokémon from the PokeAPI
    const response = await axios.get(`${URL}?offset=0&limit=1281`);
    const pokemonList = response.data.results;

    // Get the page number and page size from the request query parameters
    const page = parseInt(req.query.page) || 1;
    const pageSize = 12;

    // Calculate the start and end indices for the current page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Slice the pokemonList array to get only the Pokémon for the current page
    const paginatedPokemonList = pokemonList.slice(startIndex, endIndex);

    // Create an array of promises to fetch detailed data for each Pokémon on the current page
    const pokemonPromises = paginatedPokemonList.map((pokemon) =>
      axios.get(pokemon.url)
    );

    // Wait for all promises to resolve
    const pokemonData = await Promise.all(pokemonPromises);

    // Process the data to create an array of Pokémon objects with specific properties
    const dataPokemonList = pokemonData.map(({ data }) => {
      const { id, name, sprites, types } = data;
      return {
        id,
        name,
        image:
          sprites?.other?.home?.front_default ||
          sprites?.other["official-artwork"]?.front_default,
        types: types.map((type) => {
          return { id: type.slot, name: type.type.name };
        }),
      };
    });

    pokemons = [...pokemons, dataPokemonList];
    res.json(pokemons);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getPokemonByName = async (req, res) => {
  try {
    const { name } = req.query;
    name.toLowerCase();
    let pokemon = await Pokemon.findOne({ where: { name } });
    if (!pokemon) {
      const response = await axios.get(`${URL}/${name}`);
      pokemon = response.data;
    }
    res.json(pokemon);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    let pokemon = await Pokemon.findByPk(id);

    if (!pokemon) {
      const response = await axios.get(`${URL}/${id}`);
      pokemon = response.data;
    }
    res.json(pokemon);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createPokemon = async (req, res) => {
  try {
    const { id, name, image, hp, attack, defense, speed, height, weight } =
      req.body;
    console.log(req.body);
    const newPokemonRes = await Pokemon.create({
      id,
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });
    res.status(201).json(newPokemonRes);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getPokemons,
  getPokemonByName,
  getPokemonById,
  createPokemon,
};
