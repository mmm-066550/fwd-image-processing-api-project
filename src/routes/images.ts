import express, { Application } from 'express'
import getImageProcessInfo from '../controllers/getImageProcessInfo'
import isThumbImageCached from '../utils/validators/isThumbImageCached'
import validateImageProcessSpecs from '../utils/validators/ImageProcessSpecs'
import resizeImage from '../controllers/resizeImages'

// Create Express Api Images Endpoint Instance (Route)
const route: Application = express()

// Endpoint Middlewars
route.get(
  '/:imageName',
  getImageProcessInfo,
  isThumbImageCached,
  validateImageProcessSpecs,
  resizeImage
)
export default route
