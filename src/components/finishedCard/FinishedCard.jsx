import "./finishedCard.css";
import { GrFormCheckmark } from "react-icons/gr";
import { FaRedo } from "react-icons/fa";

export const FinishedCard = ({
  setFinished,
  resetExercise,
  quantityWrong,
  setMenuAway,
  exerciseFaults,
}) => {
  const clickExerciseAgain = () => {
    setFinished(false);
    resetExercise();
  };

  const clickExerciseFaults = () => {
    setFinished(false);
    exerciseFaults();
  };

  return (
    <div className="finished">
      <p className="finished-heading">
        <GrFormCheckmark className="checkmark" />
        Övningen avklarad!
      </p>
      <div className="statistics">
        <div className="cube-div">
          {quantityWrong < 1 ? (
            <div className="all-rights-div">
              <div className="green-cube"></div>
              <p>Du hade alla rätt!</p>
            </div>
          ) : (
            <div className="red-div">
              <div className="red-cube"></div>
              <p>{quantityWrong} stycken fel svar</p>
            </div>
          )}
        </div>
      </div>
      <div></div>
      <div className="try-again-buttons">
        <button onClick={clickExerciseAgain}>
          <FaRedo className="redo-icon" />
          Öva igen
        </button>
        {quantityWrong > 0 && (
          <button onClick={clickExerciseFaults}>
            <FaRedo className="redo-icon" />
            öva mina fel
          </button>
        )}
      </div>
    </div>
  );
};
