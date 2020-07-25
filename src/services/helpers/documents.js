export const ALLOWED_FORMATS = ['pdf', 'docx']

export const filterDocumentsListByExtensions = (allowedFormats, list) => {
  const regex = new RegExp('[^.]+$')

  return list.filter(item => {
    try {
      const extension = item.name.match(regex)[0]
      return allowedFormats.includes(extension)
    } catch (e) {
      return false
    }
  })
}
