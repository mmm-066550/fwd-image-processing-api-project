const validateImageExtension = (ext: string): boolean => {
  const IMG_FORMATS = process.env.IMG_FORMATS?.split(',')
  if (!IMG_FORMATS?.includes(ext)) return false
  else return true
}
export default validateImageExtension
