import "./finishedCard.css";
import { GrFormCheckmark } from "react-icons/gr";
import { FaRedo } from "react-icons/fa";

export const FinishedCard = ({
  setFinished,
  resetExercise,
  quantityRight,
  quantityWrong,
  setMenuAway,
}) => {
  const clickExerciseAgain = () => {
    setFinished(false);
    resetExercise();
  };

  const toMenu = () => {
    setFinished(false);
    setMenuAway(false);
  };

  return (
    <div className="finished">
      <p className="finished-heading">
        <GrFormCheckmark className="checkmark" />
        Övningen avklarad!
      </p>
      <div className="statistics">
        <div className="cube-div">
          <p className="green-cube"></p>
          <p>{quantityRight} stycken rätt svar</p>
        </div>
        <div className="cube-div">
          <div className="red-cube"></div>
          <p>{quantityWrong} stycken fel svar</p>
        </div>
      </div>
      <div></div>
      <div className="try-again-buttons">
        <button onClick={clickExerciseAgain}>
          <FaRedo className="redo-icon" />
          Öva igen
        </button>
      </div>
    </div>
  );
};
