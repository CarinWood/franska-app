import "./finishedCard.css";
import { GrFormCheckmark } from "react-icons/gr";
import { FaRedo } from "react-icons/fa";

export const FinishedCard = ({ setFinished, resetExercise }) => {
  const clickExerciseAgain = () => {
    setFinished(false);
    resetExercise();
  };

  return (
    <div className="finished">
      <p className="finished-heading">
        <GrFormCheckmark className="checkmark" />
        Övningen avklarad!
      </p>
      <div className="try-again-buttons">
        <button onClick={clickExerciseAgain}>
          <FaRedo className="redo-icon" />
          Öva igen
        </button>
        <button>Öva på andra sätt</button>
      </div>
    </div>
  );
};
