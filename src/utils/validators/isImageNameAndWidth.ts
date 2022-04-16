const isImageNameAndWidth = (fileName: string, width: number): boolean => {
  if (fileName && width) return true
  else return false
}

export default isImageNameAndWidth
