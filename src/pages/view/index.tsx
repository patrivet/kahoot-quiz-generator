import { NextPage } from 'next'
import React, { useEffect } from 'react'

const View: NextPage = () => {
  console.log("🚀 ~ file: View renders")
  // type ApiQuestionType = {
  //   question: {
  //     id: string;
  //     text: string
  //   }
  // }
  // const [apiQs, setApiQs] = React.useState<ApiQuestionType[]>()

  useEffect(() => {
    console.log(`Running useEffect() - fetching trivia questions..`)
    let res
    (async () => {
      res = await fetch('/api/trivia?categories=film_and_tv')
      res = await res.json()
      console.log(`Fetched trivia questions =`, res)
    })()
  }, [])

  return (
    <h1>
      View endpoint
    </h1>
  )
}

export default View