import { createDoc } from '@cig-platform/docs'
import { storeUserSchema } from '@Schemas/UserSchemas'

const userDocs = {
  ...createDoc('/users', ['Example'], [
    {
      method: 'post',
      title: 'title example',
      description: 'An example endpoint',
      objectSchema: storeUserSchema
    } 
  ])
}

export default userDocs
