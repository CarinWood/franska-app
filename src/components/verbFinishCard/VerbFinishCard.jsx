import './verbFinishCard.css'
import { GrFormCheckmark } from "react-icons/gr";
import { FaRedo } from "react-icons/fa";


const VerbFinishCard = () => {
  return (
    <div className='verb-finish'>
        <div className='finished-heading'>
            <GrFormCheckmark className="checkmark" />
            <p>Övningen avklarad!</p>
        </div>
        <div className="try-again-buttons">
        <button id='btn'>
          <FaRedo className="redo-icon" />
          Öva igen
        </button>
    </div>
    </div>
  )
}

export default VerbFinishCard