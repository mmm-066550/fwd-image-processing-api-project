import { NextFunction, Request, Response } from 'express'
import console from 'console'
import validateImageName from './isImageNameAndWidth'
import isImageExists from './isImageExists'
import { StatusCodes } from 'http-status-codes'

const validateImageProcessSpecs = async (req: Request, res: Response, next: NextFunction) => {
  const { width, height, ext, thumbImageName, imageName } = req.imageSpecs
  console.log({ width, height, ext, thumbImageName, imageName })

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
      msg: `missed image name or image width`
    })
  }

  //  Ensure Width And Height Are positive Valid Values
  //  Ensure Image Extension Is Supported

  next()
}

export default validateImageProcessSpecs
