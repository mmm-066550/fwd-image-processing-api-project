const validateImageSize = (width: number, height: number): boolean => {
  // Check If Width Or Height Is NAN
  if (isNaN(width) || isNaN(height)) return false
  else if (width < 32 || height < 32) return false
  else {
    return true
  }
}
export default validateImageSize
