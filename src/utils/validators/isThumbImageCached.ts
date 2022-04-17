import { NextFunction, Request, Response } from 'express'
import { isFileExists } from '../fileSystemUtils'
import path from 'path'
import { StatusCodes } from 'http-status-codes'

const isThumbImageCached = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { thumbImageName } = req.imageSpecs

  //   Generate Thumb Image Path
  const BUILDED_IMAGES_DIR = process.env.BUILDED_IMAGES_DIR as string
  const thumbImagePath = path.join(
    process.cwd(),
    BUILDED_IMAGES_DIR,
    thumbImageName
  )

  //   Check If Image With User Specs Is Already Cached
  const isImageCached = await isFileExists(thumbImagePath)

  //   Return Cached Image
  if (isImageCached) {
    return res.status(StatusCodes.OK).sendFile(thumbImagePath)
  } else {
    next()
  }
}

export default isThumbImageCached
