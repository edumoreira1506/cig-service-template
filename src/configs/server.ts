import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'

import routes from '@Configs/routes'
import swaggerDocument from '@Docs/index'

import '@Configs/database'

const App = express()

App.use(cors({ origin: '*' }))
App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.use(routes)
App.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

App.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  )
  res.setHeader('Access-Control-Allow-Credentials', 'true')

  next()
})

export default App
