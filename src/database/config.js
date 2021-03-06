require('dotenv').config()

module.exports = {
    ConnectionConfig: {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
}