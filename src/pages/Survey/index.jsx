import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

function Survey() {
    const { questionNumber } = useParams()
    const number = parseInt(questionNumber)
    const previous = number === 1 ? 1 : number - 1
    const next = number + 1

    const StyledLink = styled(Link)`
        padding: 15px;
        color: #8186a0;
        text-decoration: none;
        font-size: 18px;
    `

    return (
        <div>
            <div>
                <h1>Questionnaire 🧮</h1>
                <h2>Question {questionNumber}</h2>
            </div>
            <div>
                <StyledLink to={`/survey/${previous}`}>Previous </StyledLink>
                {number < 10 ? (
                    <StyledLink to={`/survey/${next}`}> Next</StyledLink>
                ) : (
                    <StyledLink to="/results"> End</StyledLink>
                )}
            </div>
        </div>
    )
}

export default Survey
