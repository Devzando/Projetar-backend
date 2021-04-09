const router = require('express').Router()

router.get('/', (req, res) => console.log(path.resolve('src', 'database')))

module.exports = router