import './quizAlternative.css'
import success from '../../assets/audio/success.mp3'
import { useState } from 'react'

export const QuizAlternative = ({word, nextWord, currentFrench}) => {
    const [greenBorder, setGreenBorder] = useState(false)
    const [wrongIds, setWrongIds] = useState([]);


 

    const clickOnCard = () => {
    
        if(word.id === currentFrench.id) {
            const audio = new Audio(success);
            audio.play()
            setGreenBorder(true)

            setTimeout(() => {
                setWrongIds([]);
                setGreenBorder(false)
                nextWord()
            }, 700)
            
           
        } else {
            setWrongIds([...wrongIds, word.id]);
        }
    }

    
  

  return (
    <div className={wrongIds.includes(word.id) ? "quiz-card wrong-word": greenBorder ? "quiz-card green-border" : "quiz-card"} onClick={clickOnCard}>
        <p>{word.sv}</p>
    </div>
  )
}
