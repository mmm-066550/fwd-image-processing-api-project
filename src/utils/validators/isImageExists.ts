import path from 'path'
import { isFileExists } from '../fileSystemUtils'

const isImageExists = async (
  filename: string,
  ext: string
): Promise<boolean> => {
  const ORIGINAL_IMAGES_DIR = process.env.ORIGINAL_IMAGES_DIR as string

  // Image Name and Image Path
  const img = `${filename}.${ext}`
  const imgPath = path.join(process.cwd(), ORIGINAL_IMAGES_DIR, img)
  // Check If Image Is Exists In Assets/Images Folder
  const isExists = await isFileExists(imgPath)
  return isExists
}

export default isImageExists
