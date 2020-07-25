export const getDocuments = async () => {
  const URL = `${process.env.VUE_APP_CROSSLEND_API_URL}${process.env.VUE_APP_CROSSLEND_API_DOCUMENTS_ENDPOINT}`

  const HEADERS = new Headers({
    'Content-Type': 'application/json'
  })

  const response = await fetch(URL, {
    method: 'GET',
    headers: HEADERS
  })

  try {
    return await response.json()
  } catch (e) {
    console.error('Something unexpected happened', { error: e })
  }
}
