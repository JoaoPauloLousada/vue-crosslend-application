export const getUser = async () => {
  const URL = `${process.env.VUE_APP_CROSSLEND_API_URL}${process.env.VUE_APP_CROSSLEND_API_USER_ENDPOINT}`

  const HEADERS = new Headers({
    'Content-Type': 'application/json'
  })

  return fetch(URL, {
    method: 'GET',
    headers: HEADERS
  })
    .then(res => res.json())
    .then(res => res.body.User)
    .catch(e => console.error('Something unexpected happened', { error: e }))
}
