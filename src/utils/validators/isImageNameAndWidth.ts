const isImageNameAndWidth = (fileName: string, width: number): boolean => {
  if (fileName && (width || width === 0)) return true
  else return false
}

export default isImageNameAndWidth
