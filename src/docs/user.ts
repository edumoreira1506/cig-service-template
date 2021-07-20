import j2s from 'joi-to-swagger'

import createDoc from '@Docs/createDoc'
import { storeUserSchema } from '@Schemas/UserSchemas'

const userDocs = {
  ...createDoc('/users', 'Register user', 'An example endpoint', ['Example'], j2s(storeUserSchema).swagger)
}

export default userDocs
