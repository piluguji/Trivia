import { useState, useEffect } from 'react'

import Header from "./Components/Header"
import Question from "./Components/Question"
import AllAnswers from "./Components/AllAnswers"

const App = () => {

  const [QuestionsAnswers, setQuestionsAnswers] = useState([])
  const [QuestionNumber, setQuestionNumber] = useState(0)

  useEffect( () => {
    const getData = async() => {
      const trivia = await getTriviaQuestionsAnswers()
      setQuestionsAnswers(trivia)
      console.log()
    }
    getData()
  }, []) 

  const getTriviaQuestionsAnswers = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=20&type=multiple')
    const data = res.json()
    return data
  }

  const getQuestion = (questionAnswers, index) => {
    return questionAnswers.results[index].question
  }

  const getAnswers = (index) => {
    const answers = QuestionsAnswers.results[index].incorrect_answers
    const correctAnswer = QuestionsAnswers.results[index].correct_answer
    
    const insertingIndex = Math.floor(Math.random() * 5)
    answers.splice(insertingIndex, 0, correctAnswer);
    return answers
  }

  return (
    <div className="container">

      <Header> </Header>

      <Question
        questionAnswers = {QuestionsAnswers}
        getQuestion = {getQuestion} 
        index = {0}>
      </Question>

      <AllAnswers
        answers = {["2", "34", "5", "6"]} 
        index = {0} >
      </AllAnswers>

    </div>
  )
}

export default App
