// const { knexSnakeCaseMappers } = require('objection/lib/utils/identifierMapping')

const config = {
  client: 'pg',
  connection: {
    host: process.env.HOST,
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password1',
    connectTimeout: 900000
	},
	// ...knexSnakeCaseMappers()
}

const knex = require('knex')(config)


module.exports = knex