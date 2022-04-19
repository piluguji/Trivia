import Answer from "./Answer"

const AllAnswers = ( {questionAnswers, getAnswers, index} ) => {
    return (
        <>
            {(getAnswers(questionAnswers, index)).map( (a, index) => (
                <Answer key = {index} answer = {a} ></Answer>
            ) )} 
        </>
    )
}

export default AllAnswers