const { Router } = require('express')
const postCtrl = require('../controllers/post.js')

const routes = Router()

routes.get('/', postCtrl.getAll)
routes.get('/:id', postCtrl.getOne)

module.exports = routes
