import { NextFunction, Request, Response } from 'express'
import validateImageName from './isImageNameAndWidth'
import isImageExists from './isImageExists'
import isValidSizeValues from './imageSizeValues'
import { StatusCodes } from 'http-status-codes'
import isValidExtension from './imageExtension'

const validateImageProcessSpecs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { width, height, ext, imageName } = req.imageSpecs

  //  Ensure Image Is Exists In Assets Folder
  const ORIGINAL_IMAGES_DIR = process.env.ORIGINAL_IMAGES_DIR as string

  if (!(await isImageExists(imageName, ext))) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      msg: `invalid image, check it in ${ORIGINAL_IMAGES_DIR} folder, or check for a typo in name`
    })
  }

  //  Ensure Width And FileName Are Exists (Required)
  if (!validateImageName(imageName, width)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      msg: `missed image width`
    })
  }

  //  Ensure Width And Height Are positive Valid Values
  if (!isValidSizeValues(width, height))
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      msg: `image size must be positive values and greater than 32px`
    })

  //  Ensure Image Extension Is Supported
  const IMG_FORMATS = process.env.IMG_FORMATS
  if (!isValidExtension(ext))
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      msg: `image extension must be one of the following: ${IMG_FORMATS}`
    })

  next()
}

export default validateImageProcessSpecs
