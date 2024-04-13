import './quizAlternative.css'
import { useState } from 'react'

export const QuizAlternative = ({word, nextWord, currentFrench, setNumError}) => {
    const [greenBorder, setGreenBorder] = useState(false)
    const [wrongIds, setWrongIds] = useState([]);


 

    const clickOnCard = () => {
        if(word.id === currentFrench.id) {
            setGreenBorder(true)

            setTimeout(() => {
                setWrongIds([]);
                setGreenBorder(false)
                nextWord()
            }, 700)
            
           
        } else {
            setWrongIds([...wrongIds, word.id]);
            setNumError(prev => {
                return prev + 1;
            })
        }
    }

    
  

  return (
    <div className={wrongIds.includes(word.id) ? "quiz-card wrong-word": greenBorder ? "quiz-card green-border" : "quiz-card"} onClick={clickOnCard}>
        <p>{word.sv}</p>
    </div>
  )
}
