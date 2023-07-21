require("dotenv").config();
const axios = require("axios");
const { URL } = process.env;

const getCharacters = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = 12;
        const offset = (page - 1) * limit;
        const response = await axios.get(`${URL}?limit=${limit}&offset=${offset}`);
        const pokemons = response.data;
        res.status(200).json(pokemons);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };

  module.exports = getCharacters;