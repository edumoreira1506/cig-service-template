import { DataSource } from 'typeorm'
import dotEnv from 'dotenv'

dotEnv.config()

const { DB_HOST, DB_PASSWORD, DB_USERNAME, DB_NAME } = process.env
const isProduction = process.env.NODE_ENV === 'production'

const aditionalProductionRequirednConfig = {
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

export const dataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [],
  logging: true,
  migrations: [
    isProduction ? 'build/database/migrations/**/*.js' : 'src/database/migrations/**/*.ts'
  ],
  subscribers: [],
  ...(isProduction ? aditionalProductionRequirednConfig : {}),
})

dataSource.initialize()
  .then(() => console.log('Connected to the database'))
  .catch(error => console.log(error))
