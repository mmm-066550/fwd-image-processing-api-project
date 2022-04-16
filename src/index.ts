import dotenv from 'dotenv'
import morgan from 'morgan'
import imagesRoute from './routes/images'
import console from 'console'
import express, { Application, Request, Response } from 'express'
import StatusCodes from 'http-status-codes'
import { checkIsPathExists } from './utils/fileSystemUtils'
import path from 'path'

// Set NodeJS Environment Variables
dotenv.config({ path: '.env' })

// Create Express Instance Server
const app: Application = express()

// Express Server Middle
const NODE_ENV = 'development'
app.use(morgan((process.env.NODE_ENV = NODE_ENV ? 'dev' : 'info')))

// Express Server Routes
app.get('/', (req: Request, res: Response): void => {
  res.status(StatusCodes.OK).json({
    message: 'Hello World 🌍'
  })
})
app.use('/api/images', imagesRoute)

// Start Express Server
const PORT = (process.env.EXPRESS_PORT as unknown as number) || 3000
app.listen(PORT, async () => {
  console.log(`Listen To Port: ${PORT}`)

  // Check If Thumb Images Folder Is Exists Or Create It
  const BUILDED_IMAGES_DIR = process.env.BUILDED_IMAGES_DIR as string
  const thumbImagesDir = path.join(process.cwd(), BUILDED_IMAGES_DIR)
  await checkIsPathExists(thumbImagesDir)
})

export default app
