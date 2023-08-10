const { Router } = require('express')

const typeRouter = Router()

const { getTypesHandler } = require('../handlers/typeHandler')

typeRouter.get('/', getTypesHandler)

module.exports = typeRouter