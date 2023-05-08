import { expect, test, describe } from 'vitest'
import helpers, { triviaAPIDetails } from '../helpers'

describe('helpers', () => {
  test('buildAPI_URL function', () => {
    const BASE_URL = triviaAPIDetails.API_URL
    // no params passed - all default values applied in url
    expect(helpers.buildAPI_URL(undefined, undefined, undefined)).toBe(`${BASE_URL}?limit=50&difficulty=easy,medium,hard&categories=science,film_and_tv,music,history,geography,art_and_literature,sport_and_leisure,general_knowledge,science,food_and_drink`)
    // pass in some params - these are set into url
    expect(helpers.buildAPI_URL(30, ['easy', 'medium'], ['science', 'sports'])).toBe(`${BASE_URL}?limit=30&difficulty=easy,medium&categories=science,sports`)
  })
})