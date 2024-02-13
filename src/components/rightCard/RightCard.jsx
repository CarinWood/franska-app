import "./rightCard.css";
import { GiCheckMark } from "react-icons/gi";

export const RightCard = ({frenchWord, blink}) => {
  return (
    <div className={blink ? "right-card blink" : "right-card"}>
      <p><GiCheckMark className="right-check"/>Rätt svar!</p>
      <p className="french-right-answer">{frenchWord}</p>
    </div>
  );
};
