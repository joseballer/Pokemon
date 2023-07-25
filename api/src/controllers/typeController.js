const axios = require("axios");
const { Type } = require("../db");

const getAllTypes = async (req, res) => {
  try {
    let allTypes = await Type.findAll();
    if (allTypes.length === 0) {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      allTypes = response.data.results.map((type) => ({
        name: type.name,
        url: type.url,
      }));
      await Type.bulkCreate(allTypes);
    }
    res.json(allTypes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = { getAllTypes };

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
