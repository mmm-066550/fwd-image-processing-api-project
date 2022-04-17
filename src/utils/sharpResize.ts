import sharp from 'sharp'

interface ImageResizeSpecs {
  image: string
  width: number
  height?: number
  thumbImagePath: string
  extension: string
}

const sharpResizeImage = async (params: ImageResizeSpecs): Promise<void> => {
  const { image, thumbImagePath, width, height } = params

  try {
    const transformer = sharp(image).resize({ width, height }).toFormat('jpg')
    await transformer.toFile(thumbImagePath)
  } catch (reason) {
    return
  }
}

export default sharpResizeImage
