import i18n from '@Configs/i18n'
import userDocs from '@Docs/user'

export default {
  swagger: '2.0',
  title : i18n.__('app.title'),
  description : i18n.__('app.description'),
  version: '1.0.0',
  host: process.env.APP_URL,
  basePath: '/',
  schemes: [ 'http', 'https' ],
  consumes: [ 'application/json' ],
  produces: [ 'application/json' ],
  paths: {
    ...userDocs
  }
}
