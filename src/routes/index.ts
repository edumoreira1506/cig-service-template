import express from 'express'

import HomeController from '@Controllers/HomeController'

import v1 from './v1'

const routes = express.Router()

routes.get('/', HomeController.index)

routes.use('/v1', v1)

export default routes
