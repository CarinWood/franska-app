import { useState } from "react";
import "./sentences.css";

export const Sentences = ({ sentenceList }) => {
  const [boxes, setBoxes] = useState([]);
  const [currentNum, setCurrentNum] = useState(4);

  const getSentence = () => {
    return <p>{sentenceList[currentNum].sv}</p>;
  };

  const generateBoxes = () => {
    switch (sentenceList[currentNum].quant) {
      case 4:
        return (
          <div className="boxes">
            <p className="wordbox">hej</p>
            <p className="wordbox">hej</p>
            <p className="wordbox">hej</p>
            <p className="wordbox">hej</p>
          </div>
        );
        break;
      case 3:
        return (
          <div className="boxes">
            <p className="wordbox">hej</p>
            <p className="wordbox">hej</p>
            <p className="wordbox">hej</p>
          </div>
        );
        break;
      default:
        return "";
    }
  };

  return (
    <div className="sentences">
      <p className="sentence-heading">Klicka på orden i rätt ordning!</p>
      <div className="sentence">{getSentence()}</div>
      <div className="boxes">{generateBoxes()}</div>
    </div>
  );
};
