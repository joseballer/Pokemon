const { Router } = require("express")
const pokemonHandler = require('./pokemonHandler')
const typeHandler = require('./typeHandler')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()

router.use("/pokemon", pokemonHandler)
router.use("/type", typeHandler)
// Ejemplo: router.use('/auth', authRouter);

module.exports = router
