const { DB_HOST, DB_PASSWORD, DB_USERNAME, DB_NAME } = process.env
const isProduction = process.env.NODE_ENV === 'production'

const additionalProductioRequirednConfig = {
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
};

module.exports = {
  type: 'postgres',
  host: DB_HOST,
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  logging: true,
  entities: [
    isProduction ? 'build/entities/*.js' : 'src/entities/*.ts'
  ],
  migrations: [
    isProduction ? 'build/database/migrations/**/*.js' : 'src/database/migrations/**/*.ts'
  ],
  subscribers: [],
  cli: {
    migrationsDir: isProduction ? 'build/database/migrations' : 'src/database/migrations'
  },
  ...(isProduction ? additionalProductioRequirednConfig : {})
}
