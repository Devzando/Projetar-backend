const express = require('express')
const cors = require('cors')
const routers = require('./routers')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routers)

app.listen(3333, () => console.log('running'))