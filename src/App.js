import { useState, useEffect, forwardRef } from 'react'

import Header from "./Components/Header"
import Question from "./Components/Question"
import AllAnswers from "./Components/AllAnswers"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from "@mui/material/Button";

const App = () => {

  const [QuestionsAnswers, setQuestionsAnswers] = useState([])
  const [QuestionNumber, setQuestionNumber] = useState(0)
  const [Score, setScore] = useState(0)
  const [gotCorrect, setGotCorrect] = useState(false)

  //MUI ALERT/TOAST CODE
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  })
  
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(true);
  }
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }
  //-----------------

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
 
  const getCorrectAnswer = (index) => {
    return QuestionsAnswers.results[index].correct_answer
  }

  //Creates Answer Array that Randomly Puts The Correct Answer within the Wrong Answers
  const getAnswers = (questionAnswers, index) => {
    if(questionAnswers.length !== 0 ){
      //Get correct answer and all wrong answers

      const answers = questionAnswers.results[index].incorrect_answers
      const correctAnswer = getCorrectAnswer(index)
      
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
  const clickChoice = (answer) => {
    const correctAnswer = getCorrectAnswer(QuestionNumber)
    if(answer === correctAnswer){
      setScore(Score + 1)
      setGotCorrect(true)
    }else{
      setGotCorrect(false)
    }
    handleClick()
    setQuestionNumber(QuestionNumber + 1)
    checkIfOver()
  }

  //check if out of questions
  const checkIfOver = () => {
    if(QuestionNumber === QuestionsAnswers.results.length - 1){
      //TODO: How to End Game? 
    }
  }

  return (
    <div className="container">
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert severity={gotCorrect ? "success" : "error"} sx={{ width: "100%" }}>
          {gotCorrect ? "Correct!" : "Incorrect!"}
        </Alert>
      </Snackbar>
      <Header          
        score = {Score}
        totalQuestions = {QuestionNumber}> </Header>
      {QuestionsAnswers && ( 
        <>
        <Question
        questionAnswers = {QuestionsAnswers}
        getQuestion = {getQuestion} 
        index = {QuestionNumber}>
      </Question>

      <AllAnswers
        questionAnswers = {QuestionsAnswers}
        getAnswers = {getAnswers}
        clickChoice = {clickChoice} 
        index = {QuestionNumber} >
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