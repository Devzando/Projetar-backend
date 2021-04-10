const connectiondb = require('../database/connection')
const { encrypt } = require('../helpers/cryptography')

module.exports = {
    async create(req, res) {
        const { email, password } = req.body
        const hash = await encrypt(password)
        try {
            await connectiondb('users').insert({email, password: hash})
            res.status(200).send()
        } catch (error) {
            res.status(400).send()
        }
    }
}