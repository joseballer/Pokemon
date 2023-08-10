// const { Router } = require("express");
// const {
//   getPokemons,
//   getPokemonByName,
//   getPokemonById,
//   createPokemon,
// } = require("../controllers/pokemonController");
// const { getAllTypes } = require("../controllers/typeController");
// const router = Router();

// router.get("/pokemons", getPokemons);
// router.get("/pokemon", getPokemonByName);
// router.get("/pokemons/:id", getPokemonById);
// router.get("/types", getAllTypes);
// router.post("/pokemon", createPokemon);

// module.exports = router;
const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouter = require('./pokemonRouter')
const typeRouter = require('./typeRouter')

const router = Router()
router.use('/pokemons', pokemonRouter)
router.use('/types', typeRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router