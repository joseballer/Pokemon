require("dotenv").config();
const axios = require("axios")
const { Pokemon } = require("../db.js")

const getPokelist = async () => {
  //hasta la fecha de este algoritmo hay 1281 pokemones
  try {
    const pokemons = await axios("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281")
    return pokemons.data
    
  } catch (error) {
    throw new Error('Api Offline')
  }
}
const getPokemonDetail = async (id) => {
  try {
    const pokemonDetail = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return pokemonDetail.data
    
  } catch (error) {
    throw new Error('Api Error On /:id ->Detail by id ')
  
  }
}
const getPokemonByName = async (name) => {
  try {
    console.log(name)
    const pokemonDetail = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return pokemonDetail.data
  } catch (error) {
    throw new Error("Pokemon not found")
  }
}
const newPokemon = async (ID, Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso) => {
  try {
    if (!ID || !Nombre || !Imagen || !Vida || !Ataque || !Defensa) {
      throw new Error("==============Error de validacion de datos:,")
    } else {
      return await Pokemon.create({ ID, Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso })
    }
  } catch (error) {
    throw new Error(" Missing dataerror on post create error: \n  " + error.message)
  }
}
module.exports = { getPokelist, getPokemonDetail, getPokemonByName, newPokemon }



// const Pokemon = require('../models/Pokemon');

// const getPokemons = async (req, res) => {
//   try {
//     const pokemons = await Pokemon.findAll();
//     res.json(pokemons);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// const getPokemonByName = async (req, res) => {
//   try {
//     const { name } = req.query;
//     if (!name) {
//       res.status(400).send('Missing name query parameter');
//       return;
//     }
//     const pokemon = await Pokemon.findOne({ where: { name } });
//     if (!pokemon) {
//       res.status(404).send('Pokemon not found');
//       return;
//     }
//     res.json(pokemon);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };



// const getPokemonById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const pokemon = await Pokemon.findByPk(id);
//     if (!pokemon) {
//       res.status(404).send('Pokemon not found');
//       return;
//     }
//     res.json(pokemon);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// const createPokemon = async (req, res) => {
//   try {
//     const { ID, Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso } = req.body;
//     const newPokemonRes = await Pokemon.create({ ID, Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso });
//     res.status(201).json(newPokemonRes);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// };

// module.exports = {
//   getPokemons,
//   getPokemonByName,
//   getPokemonById,
//   createPokemon
// };
