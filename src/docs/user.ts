import { createDoc } from '@cig-platform/docs'
import { storeUserSchema } from '@Schemas/UserSchemas'

const userDocs = {
  ...createDoc('/users', 'Register user', 'An example endpoint', ['Example'], storeUserSchema)
}

export default userDocs
