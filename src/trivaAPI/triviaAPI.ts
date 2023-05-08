export const triviaAPI = async (apiURL: string) /* FIX ME: return type */ => {
  if (!apiURL || !apiURL.length) return null
  try {
    const res = await fetch(apiURL)
    return await res.json()
  } catch (error) {
    return error
  }
}
