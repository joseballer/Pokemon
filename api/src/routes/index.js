const { Router } = require("express");
const {
  getPokemons,
  getPokemonByName,
  getPokemonById,
  createPokemon,
} = require("../controllers/pokemonController");
const { getAllTypes } = require("../controllers/typeController");
const router = Router();

router.get("/pokemons", getPokemons);
router.get("/pokemon", getPokemonByName);
router.get("/pokemon/:id", getPokemonById);
router.get("/types", getAllTypes);
router.post("/pokemon", createPokemon);

module.exports = router;
