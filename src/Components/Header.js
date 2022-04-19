import ScoreDisplay from "./ScoreDisplay"

const Header = ( {score, totalQuestions} ) => {
  return (
    <div className = 'header'>
        <h1 className = 'triviaTitle'>TRIVIA</h1>
        <ScoreDisplay
          score = {score}
          totalQuestions = {totalQuestions}>
        </ScoreDisplay>

    </div>
  )
}

export default Header