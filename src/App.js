import { useState, useEffect } from 'react'

import Header from "./Components/Header"
import Question from "./Components/Question"
import AllAnswers from "./Components/AllAnswers"

const App = () => {

  const [QuestionsAnswers, setQuestionsAnswers] = useState([])

  // Gets Trivia Questions (All of Them) from OpenTDB 
  const getTriviaQuestionsAnswers = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=25&type=multiple')
    const data = res.json()
    return data
  }


  //Sets the QuestionsAnswers state to the data
  useEffect( () => {
    const getData = async() => {
      const trivia = await getTriviaQuestionsAnswers()
      setQuestionsAnswers(trivia)
    }
    getData()
  }, []) 

  //Returns the specific question from the current index we are on
  const getQuestion = (questionAnswers, index) => {
    if(questionAnswers.length !== 0){
      //console.log(questionAnswers)
      return questionAnswers.results[index].question
    }
    return ""
  } 
 
  //Creates Answer Array that Randomly Puts The Correct Answer within the Wrong Answers
  const getAnswers = (questionAnswers, index) => {
    if(questionAnswers.length !== 0 ){
      //Get correct answer and all wrong answers

      const answers = questionAnswers.results[index].incorrect_answers
      const correctAnswer = questionAnswers.results[index].correct_answer

      //Weird Behavior
      console.log(answers, correctAnswer)
      console.log(questionAnswers) 
      
      //Combine them so that correct answer is randomly inserted 
      const insertingIndex = Math.floor(Math.random() * 5)
      if(answers.length === 3){
        answers.splice(insertingIndex, 0, correctAnswer);
      }
      return answers
    }
    return []
  }

  //Once you Click an Answer
  const clickChoice = () => {
    console.log("I was clicked")  
  }


  return (
    <div className="container"> 
      
      <Header> </Header>
      {QuestionsAnswers && ( 
        <>
        <Question
        questionAnswers = {QuestionsAnswers}
        getQuestion = {getQuestion} 
        index = {0}>
      </Question>

      <AllAnswers
        questionAnswers = {QuestionsAnswers}
        getAnswers = {getAnswers} 
        index = {0} >
      </AllAnswers>
      </>)
      }
    </div>
  )
}

export default App

/*

      <Question
        questionAnswers = {QuestionsAnswers}
        getQuestion = {getQuestion} 
        index = {0}>
      </Question>

      <AllAnswers
        questionAnswers = {QuestionsAnswers}
        getAnswers = {getAnswers} 
        index = {0} >
      </AllAnswers>

*/