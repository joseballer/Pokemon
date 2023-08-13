const axios = require("axios");
const { Type } = require("../db");
const { getPokemonById } = require("./pokemonController");

const getAllTypes = async () => {
  let allTypes = await Type.findAll();
  if (allTypes.length === 0) {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    allTypes = response.data.results.map((type) => ({
      Nombre: type.name,
    }));
    await Type.bulkCreate(allTypes);
  }
  return allTypes;
};


const getPokemonByType = async (type) => {
  const response = await axios.get("https://pokeapi.co/api/v2/type");
  const allTypes = response.data.results;
  const typeObject = allTypes.find((t) => t.name === type);
  if (typeObject) {
      const pokemonResponse = await axios.get(typeObject.url);
      const pokemonURLArray = pokemonResponse.data.pokemon
      const allPokemonsByType = await Promise.all(
        pokemonURLArray.map(async (element) => {
          const id = element.pokemon.url.split('/').slice(-2, -1)[0]
          const apiPokemon = await getPokemonById(id)
          return apiPokemon
        })
      )
    
      return [...allPokemonsByType]
  }
};


module.exports = { getAllTypes, getPokemonByType };

// const typesLocal = []

// const getAllTypes = async () => {
//   try {
//     const contentTypeTester = await Type.findAll()
//     if (contentTypeTester.length === 0) {
//       const apiTypes = await axios("https://pokeapi.co/api/v2/type")
//       apiTypes.data.results.forEach((type) => typesLocal.push({ Nombre: type.name }))
//       await Type.bulkCreate(typesLocal)
//     }

//     const allTypes = await Type.findAll()

//     return allTypes
//   } catch (error) {
//     throw new Error("Error on get all types:  " + error.message)
//   }
// }
