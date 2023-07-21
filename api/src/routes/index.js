const { Router } = require('express')
const router = Router();
const getCharacters = require('../controllers/getCharacters')

router.get('/', getCharacters)

module.exports = router;
