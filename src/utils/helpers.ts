const apiDefaults = { // ! fixme: not in use atm - this doesnt initialise the 2 arrays for some reason.
  categories: ['science', 'film_and_tv', 'music', 'history', 'geography', 'art_and_literature', 'sport_and_leisure', 'general_knowledge', 'science', 'food_and_drink'], 
  difficulties: ['easy', 'medium', 'hard'],
  limit: 50
}

export const triviaAPIDetails = {
  API_URL: 'https://the-trivia-api.com/v2/questions'
}

interface Helpers {
  buildAPI_URL: (limit?: number, difficulty?: string[], categories?: string[]) => string,
  anotherHelper: () => void
}

const helpers: Helpers = {
  /*
    buildAPI_URL:
    Params: num of Qs, 1-n Difficult levels, array of categories.
    Returns: URL with passed or default parameters.
  */
  buildAPI_URL: (
    limit = 50,
    difficulties = ['easy', 'medium', 'hard'],
    categories = ['science', 'film_and_tv', 'music', 'history', 'geography', 'art_and_literature', 'sport_and_leisure', 'general_knowledge', 'science', 'food_and_drink']
  ) => {
    const categoryParams = categories.join(',')
    const difficultyParams = difficulties.join(',')
    return `${triviaAPIDetails.API_URL}?limit=${limit}&difficulty=${difficultyParams}&categories=${categoryParams}`
  },
  anotherHelper: () => null
}

export default helpers