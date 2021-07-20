import { SwaggerSchema } from 'joi-to-swagger'

export default function createDoc(route: string, title: string, description: string, tags: string[], bodyObject: SwaggerSchema): Record<string, any> {
  return {
    [route]: {
      post: {
        summary: title,
        description,
        tags,
        parameters: [
          {
            in: 'body',
            name: 'payload',
            schema: bodyObject
          }
        ],
        responses:{
          200: {
            description : 'OK'
          },
          400: {
            description : 'Error'
          }
        }
      }
    },
  }
}
