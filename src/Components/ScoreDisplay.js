const ScoreDisplay = ({score, totalQuestions}) => {
  return (
    <h3 className = 'child'>{score}/{totalQuestions}</h3>
  )
}

export default ScoreDisplay