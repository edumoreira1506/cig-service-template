import express from 'express'

import HomeController from '@Controllers/HomeController'
import UserController from '@Controllers/UserController'

import withBodyValidation from '@Middlewares/withBodyValidation'

import { storeUserSchema } from '@Schemas/UserSchemas'

const routes = express.Router()

routes.get('/', HomeController.index)

routes.post('/users', withBodyValidation(storeUserSchema), UserController.store)

export default routes
