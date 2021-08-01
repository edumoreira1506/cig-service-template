import express from 'express'
import { withBodyValidation } from '@cig-platform/core'

import UserController from '@Controllers/UserController'
import { storeUserSchema } from '@Schemas/UserSchemas'

const router = express.Router()

router.post('/users', withBodyValidation(storeUserSchema), UserController.store)

export default router
