import { Request, Response } from 'express'
import path from 'path'
import sharpResizeImage from '../utils/sharpResize'
import { StatusCodes } from 'http-status-codes'

const resizeImage = async (req: Request, res: Response): Promise<void> => {
  const { width, height, ext, imageName, thumbImageName } = req.imageSpecs

  try {
    // Get The Image File
    const imagePath = `${imageName}.${ext}`
    const ORIGINAL_IMAGES_DIR = process.env.ORIGINAL_IMAGES_DIR as string
    const image = path.join(process.cwd(), ORIGINAL_IMAGES_DIR, imagePath)

    // Set The Thumb Image Path
    const BUILDED_IMAGES_DIR = process.env.BUILDED_IMAGES_DIR as string
    const thumbImagePath = path.join(
      process.cwd(),
      BUILDED_IMAGES_DIR,
      thumbImageName
    )

    await sharpResizeImage({
      image,
      thumbImagePath,
      width,
      height,
      extension: ext
    })
    return res.status(StatusCodes.ACCEPTED).sendFile(thumbImagePath)
  } catch (error) {
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ msg: `Somthing wrong happend! : ${error}` })
  }
}

export default resizeImage
