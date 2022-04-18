import Answer from "./Answer"

const AllAnswers = ( {answers, index} ) => {

    return (
        <>
            {answers.map( (a, index) => (
                <Answer key = {index} answer = {a} ></Answer>
            ) )} 
        </>
    )
}

export default AllAnswers