import express from 'express'

import HomeController from '@Controllers/HomeController'

const routes = express.Router()

routes.get('/', HomeController.index)

export default routes
