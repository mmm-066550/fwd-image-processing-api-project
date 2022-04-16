// Set NodeJS Environment Variables
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

// Create Express Instance Server
import express, { Application, Request, Response } from 'express'
const app: Application = express()

// Express Server Middle
import morgan from 'morgan'
app.use(morgan('short'))

// Express Server Routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World 🌍'
  })
})

// Start Express Server
const PORT = process.env.EXPRESS_PORT || 3000
app.listen(PORT)

export default app
