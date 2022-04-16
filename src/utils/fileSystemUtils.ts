import fs from 'fs-extra'

export const checkIsPathExists = (filepath: string) =>
  fs
    .ensureDir(filepath)
    .then((): void => {
      return
    })
    .catch((): void => {
      return
    })

export const isFileExists = async (filepath: string) => {
  const exists = await fs.pathExists(filepath)
  return exists
}
