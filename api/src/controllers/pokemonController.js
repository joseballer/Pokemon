const axios = require("axios");
const { Pokemon } = require("../db.js");
const { URL } = process.env;

const getPokemons = async (page) => {
  let pokemons = await Pokemon.findAll();

  // Fetch the list of Pokémon from the PokeAPI
  const response = await axios.get(`${URL}?offset=0&limit=1281`);
  const pokemonList = response.data.results;

  // Get the page number and page size from the request query parameters
  // Calculate the start and end indices for the current page
  const intPage = parseInt(page) || 1;
  const pageSize = 12;
  const startIndex = (intPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPokemonList = pokemonList.slice(startIndex, endIndex);

  const pokemonPromises = paginatedPokemonList.map((pokemon) =>
    axios.get(pokemon.url)
  );
  const pokemonData = await Promise.all(pokemonPromises);

  // Process the data to create an array of Pokémon objects with specific properties
  const dataPokemonList = pokemonData.map(({ data }) => {
    const { id, name, sprites, stats, height, weight, types } = data;
    return {
      ID: id,
      Nombre: name,
      Imagen:
        sprites?.other?.home?.front_default ||
        sprites?.other["official-artwork"]?.front_default,
      Vida: stats[0].base_stat,
      Ataque: stats[1].base_stat,
      Defensa: stats[2].base_stat,
      Velocidad: stats[5].base_stat,
      Altura: height,
      Peso: weight,
      Type: types.map((type) => {
        return { Nombre: type.type.name };
      }),
    };
  });

  pokemons = [...pokemons, dataPokemonList];
  return pokemons;
};


const getPokemonByName = async (name) => {
  const nameLower = name.toLowerCase();
  let pokemon = [];
  pokemon = await Pokemon.findOne({ where: { Nombre: nameLower } });
  if (!pokemon) {
    const response = await axios.get(`${URL}/${nameLower}`);
    const { id, name, sprites, stats, height, weight, types } = response.data;
    pokemon = {
      ID: id,
      Nombre: name,
      Imagen:
        sprites?.other?.home?.front_default ||
        sprites?.other["official-artwork"]?.front_default,
      Vida: stats[0].base_stat,
      Ataque: stats[1].base_stat,
      Defensa: stats[2].base_stat,
      Velocidad: stats[5].base_stat,
      Altura: height,
      Peso: weight,
      Type: types.map((type) => {
        return { Nombre: type.type.name };
      }),
    };
  }
  return [pokemon];
};

const getPokemonById = async (id) => {
  let pokemon = [];
  const numberId = parseInt(id);
  pokemon = await Pokemon.findByPk(numberId);
  if (!pokemon) {
    const response = await axios.get(`${URL}/${numberId}`);
    const { id, name, sprites, stats, height, weight, types } = response.data;
    pokemon = {
      ID: id,
      Nombre: name,
      Imagen:
        sprites?.other?.home?.front_default ||
        sprites?.other["official-artwork"]?.front_default,
      Vida: stats[0].base_stat,
      Ataque: stats[1].base_stat,
      Defensa: stats[2].base_stat,
      Velocidad: stats[5].base_stat,
      Altura: height,
      Peso: weight,
      Type: types.map((type) => {
        return { Nombre: type.type.name };
      }),
    };
  }
  return pokemon;
};

const createPokemon = async (
  Nombre,
  Imagen,
  Vida,
  Ataque,
  Defensa,
  Velocidad,
  Altura,
  Peso,
  Type
) => {
  validateString(Nombre);
  const existence = await axios(`${URL}/${nombre}`);
  if (existence) throw Error("Ya existe un Pokemon con ese nombre.");
  validateNumber(Vida);
  validateNumber(Ataque);
  validateNumber(Defensa);
  validateURL(Imagen);
  typeString(Velocidad);
  typeString(Altura);
  typeString(Peso);
  if (!Nombre || !Imagen || !Vida || !Ataque || !Defensa || !Type)
    throw Error("Datos incompletos.");
  const newPokemon = await Pokemon.create({
    Nombre,
    Imagen,
    Vida,
    Ataque,
    Defensa,
    Velocidad,
    Altura,
    Peso,
  });
  Type.forEach((type) => {
    newPokemon.addType(type);
  });
  return newPokemon;
};

module.exports = {
  getPokemons,
  getPokemonByName,
  getPokemonById,
  createPokemon,
};
