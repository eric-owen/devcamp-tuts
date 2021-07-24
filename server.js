const express = require('express')
const dotenv = require('dotenv').config({ path: './config/config.env' })

const app = express()

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`env: ${process.env.NODE_ENV} - port: ${PORT}`))
