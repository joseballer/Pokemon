const {getAllTypes} = require('../controllers/typeController')

const getTypesHandler = async (req, res) => {
	const { type } = req.query
	try {
		const response = await getAllTypes()
		return res.status(201).json(response)
	} catch (error) {
		return res.status(400).json({ error: error.message })
	}
}

module.exports = {
	getTypesHandler,
}