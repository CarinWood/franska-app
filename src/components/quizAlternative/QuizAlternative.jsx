import { useState } from 'react'
import './quizAlternative.css'

export const QuizAlternative = ({word, wordArray}) => {
    const [redBorder, setRedBorder] = useState(false)

    const clickOnCard = () => {
        if(word === wordArray[0].sv) {
            console.log("right answer!")
        } else {
            console.log("wrong answer!")
            setRedBorder(true)
        }
    }



  return (
    <div className={redBorder ? "quiz-card red-border" : "quiz-card"} onClick={clickOnCard}>
        <p>{word}</p>
    </div>
  )
}
