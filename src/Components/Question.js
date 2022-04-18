
const Question = ({questionAnswers, getQuestion, index }) => {
  
  return (
    <h4>{getQuestion(questionAnswers, index)}</h4>
  )
}

export default Question

