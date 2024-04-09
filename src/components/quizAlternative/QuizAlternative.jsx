import { useState } from 'react'
import './quizAlternative.css'
import success from '../../assets/audio/success.mp3'

export const QuizAlternative = ({word, wordArray}) => {
    const [redBorder, setRedBorder] = useState(false)
    const [greenBorder, setGreenBorder] = useState(false)

    const clickOnCard = () => {
        if(word === wordArray[0].sv) {
            console.log("right answer!")
            const audio = new Audio(success);
            audio.play();
            setGreenBorder(true)
        } else {
            console.log("wrong answer!")
            setRedBorder(true)
        }
    }



  return (
    <div className={redBorder ? "quiz-card red-border": greenBorder ? "quiz-card green-border" : "quiz-card"} onClick={clickOnCard}>
        <p>{word}</p>
    </div>
  )
}
