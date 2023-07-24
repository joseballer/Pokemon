require("dotenv").config();
const axios = require("axios");
const { Pokemon } = require("../db.js");

const getPokemons = async (req, res) => {
  try {
    let pokemons = await Pokemon.findAll();

    if (pokemons.length === 0) {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1281"
      );
      pokemons = response.data.results.map((pokemon) => ({
        name: pokemon.name,
        url: pokemon.url,
      }));
    }

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
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
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
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
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
