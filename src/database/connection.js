const knex = require('knex')
const { ConnectionConfig } = require('./config')

const connection = knex({
    client: 'mysql2',
    connection: ConnectionConfig,
    useNullAsDefault: true
})

module.exports = connection