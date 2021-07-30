const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config({ path: './config/config.env' })
const morgan = require('morgan')
const connectDB = require('./config/db')

connectDB()

//routes files
const bootcamps = require('./routes/bootcamps')

const app = express()

//middleware
if (process.env.NODE_ENV === 'development') {
    app.use(cors())
    app.use(morgan('dev'))
} else {
    app.use(morgan('combined'))
}

//mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 1337
const server = app.listen(
    PORT,
    console.log(`env: ${process.env.NODE_ENV} - port: ${PORT}`)
)

// handle promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`error: ${err.message}`)
    server.close(() => process.exit(1))
})
