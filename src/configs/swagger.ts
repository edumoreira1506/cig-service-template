import createSwaggerDocument from '@cig-platform/docs'

import i18n from '@Configs/i18n'
import docs from '@Docs/index'

const swaggerDocument = createSwaggerDocument({
  title: i18n.__('app.title'),
  description: i18n.__('app.description'),
  host: process.env.APP_URL,
}, docs)

export default swaggerDocument
