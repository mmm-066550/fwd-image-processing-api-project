/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

const getImageProcessInfo = (
  req: Request,
  _: Response,
  next: NextFunction
): void => {
  // Get The Image FileName From Request Params
  const imageName = req.params.imageName as string

  // Get The Width & The Height Of The Image From Request Query
  const width = req.query.width as unknown as number
  const height = req.query.height as unknown as number
  const ext =
    (req.query.ext as string) || (process.env.DEFAULT_IMAGE_FORMAT as string)
  const thumbImageName = `${imageName}-${width}x${
    height || width
  }.${ext}` as string

  //   Append Request Info To Request Body For Next Middleware
  interface imageSpecs {
    imageName: string
    width: number
    height: number
    ext: string
    thumbImageName: string
  }
  const imageSpecs: imageSpecs = {
    imageName,
    width: +width,
    height: height ? +height : +width,
    ext,
    thumbImageName
  }
  req.imageSpecs = imageSpecs
  next()
}

export default getImageProcessInfo
