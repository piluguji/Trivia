
const Answer = ( {answer, clickChoice} ) => {
  return (
    <p 
        className = 'answer' onClick = {clickChoice}>
        {answer}
    </p>
  )
}

export default Answer