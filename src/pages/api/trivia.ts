import type { NextApiRequest, NextApiResponse } from 'next'

interface QuizModel {
  category: string
  id: string
  correctAnswer: string
  incorrectAnswers: string[]
  question: {
    text: string
  }
  tags: string[]
  type: string
  difficulty: string
  regions: string[]
  isNiche: boolean
}

const TRIVIA_API_URL = 'https://the-trivia-api.com/v2/questions'
const defaultQuestionsLimit = 3
const defaultDifficulty = 'easy, medium, hard'
const defaultCategories: string[] = []

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<QuizModel[] | any>
) {
  try {
    const {
      categories = defaultCategories,
      questionsLimit = defaultQuestionsLimit,
      difficulty = defaultDifficulty,
    } = request?.query
    let questions = await fetch(
      `${TRIVIA_API_URL}?limit=${questionsLimit}&difficulty=${difficulty}&categories=${categories}`
    )
    questions = await questions.json()
    response.status(200).json(questions)
  } catch (error) {
    console.log(`Error /api/trivia/ error =${error}`)
    return response.status(500).json({ error })
  }
}
