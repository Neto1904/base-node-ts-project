import express from 'express'
import 'express-async-errors'
import dotenv from 'dotenv-safe'
import cors from 'cors'
import errorHandler from './errors/errorHandler'
import { createConnection } from 'typeorm'

const server = express()
dotenv.config()

const PORT = process.env.APP_PORT || 8080

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(errorHandler)

server.listen(PORT, async () => {
  console.log('Server running on port ' + PORT)
  // await createConnection()
})
