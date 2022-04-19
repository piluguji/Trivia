
const Answer = ( {answer, clickChoice} ) => {
  const HTMLDecoderEncoder = require("html-encoder-decoder");
  return (
    <div style = {{cursor: 'pointer'}} onClick={() => clickChoice(answer)}>
        <p 
            className = 'answer'>
            {HTMLDecoderEncoder.decode(answer)}
        </p>
    </div>
  )
}

export default Answer