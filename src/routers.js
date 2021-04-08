const router = require('express').Router()

router.get('/', (req, res) => res.status(200).send({ "message": 'é só o bolado' }))

module.exports = router