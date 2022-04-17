import { useState } from 'react'

import Header from "./Components/Header"
import Question from "./Components/Question"
import AllAnswers from "./Components/AllAnswers"

const App = () => {

  const [QuestionsAnswers, setQuestionsAnswers] = useState([])

  const getTriviaQuestionsAnswers = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=20&type=multiple')
    const data = res.json()

    return data
  }

  return (
    <div className="container">
      <Header> </Header>
      <Question question = {question}></Question>
      <AllAnswers answers = {answers}></AllAnswers>
    </div>
  )
}

export default App
