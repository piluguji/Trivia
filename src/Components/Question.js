
const Question = ({questionAnswers, getQuestion, index }) => {
  const HTMLDecoderEncoder = require("html-encoder-decoder");
  return (
    <h4>{HTMLDecoderEncoder.decode(getQuestion(questionAnswers, index))}</h4>
  )
}

export default Question

