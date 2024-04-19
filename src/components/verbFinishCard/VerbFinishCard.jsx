import './verbFinishCard.css'
import { GrFormCheckmark } from "react-icons/gr";
import { FaRedo } from "react-icons/fa";
import { firstConArr, headingsArrFirstCon, headingsArrSecondCon, headingsArrThirdCon, headingsArrayIrregular, secondConArr } from '../../data/VerbArray';
import { useEffect } from 'react';


const VerbFinishCard = ({
  setCurrentNum, 
  setVerbsFinished, 
  verbArray, 
  setVerbArray, 
  setHeadingArray, 
  verbChoice,
  currentNum
}) => {

  useEffect(() => {
    setCurrentNum(0)
  }, [currentNum]);

  const redoExercise = () => {
    setCurrentNum(0)
    setVerbsFinished(false)

    const tempArray = verbArray.map((verb) => {
      return  { ...verb, answer: "", correct: null } 
    })


    setVerbArray(tempArray)

    if(verbChoice === 1) {
      setHeadingArray(headingsArrFirstCon)
      setVerbArray(firstConArr[currentNum])
    } else if (verbChoice === 2) {
      setHeadingArray(headingsArrSecondCon)
      setVerbArray(secondConArr[currentNum])
    } else if (verbChoice === 3) {
      setHeadingArray(headingsArrThirdCon)
    } else {
      setHeadingArray(headingsArrayIrregular)
    }
  }


  return (
    <div className='verb-finish'>
        <div className='finished-heading'>
            <GrFormCheckmark className="checkmark" />
            <p>Övningen avklarad!</p>
        </div>
        <div className="try-again-buttons">
        <button id='btn' onClick={redoExercise}>
          <FaRedo className="redo-icon" />
          Öva igen
        </button>
    </div>
    </div>
  )
}

export default VerbFinishCard