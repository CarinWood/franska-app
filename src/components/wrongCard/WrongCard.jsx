import "./wrongCard.css";
import { GiCheckMark } from "react-icons/gi";

export const WrongCard = ({ frenchWord, getCurrent }) => {
  return (
    <article className="wrong-card">
      <p id="wrong">
        <GiCheckMark className="error" />
        <span>Fel!</span>
      </p>
      <p>
        Du svarade:<span>{frenchWord}</span>
      </p>
      <p>Rätt svar: {getCurrent()}</p>
    </article>
  );
};
