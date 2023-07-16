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
  req: NextApiRequest,
  res: NextApiResponse<QuizModel[] | any>
) {
  try {
    const { categories = defaultCategories, questionsLimit = defaultQuestionsLimit, difficulty = defaultDifficulty} = req?.query
    let result = await fetch(`${TRIVIA_API_URL}?limit=${questionsLimit}&difficulty=${difficulty}&categories=${categories}`)
    result = await result.json()
    res.status(200).json(result)

  } catch (error) {
    console.log(`Error /api/trivia/ error =${error}`)
    return res.status(500).json({ error })
  }
}
