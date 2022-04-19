import Answer from "./Answer"

const AllAnswers = ( {questionAnswers, getAnswers, clickChoice, index} ) => {
    return (
        <>
            {(getAnswers(questionAnswers, index)).map( (a, index) => (
                <Answer 
                    key = {index} 
                    clickChoice = {clickChoice} 
                    answer = {a} >
                </Answer>
            ) )} 
        </>
    )
}

export default AllAnswers