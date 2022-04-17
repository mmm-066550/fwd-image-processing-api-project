import fs from 'fs-extra'

export const checkThumImagesDir = (filepath: string) => fs.ensureDir(filepath)

export const isFileExists = async (filepath: string): Promise<boolean> => {
  return await fs.pathExists(filepath)
}
