import { useEffect, useState } from "react";
import "./sentences.css";
import { click } from "@testing-library/user-event/dist/click";

export const Sentences = ({ sentenceList }) => {
  /*   const [boxes, setBoxes] = useState([]); */
  const [currentNum, setCurrentNum] = useState(0);
  const [newArray, setNewArray] = useState([]);
  const [checkArray, setCheckArray] = useState([]);
  const [clickedIndices, setClickedIndices] = useState([]);

  const getSentence = () => {
    return <p>{sentenceList[currentNum].sv}</p>;
  };

  /*  const generateBoxes = () => {
    generateWord();
    const quant = sentenceList[currentNum].quant;
    const words = Array.from({ length: quant }, (_, index) => (
      <p key={index} className="wordbox"></p>
    ));
    return <div className="boxes">{words}</div>;
  };
  */

  useEffect(() => {
    generateWord();
  }, []);

  useEffect(() => {
    console.log(clickedIndices);
  }, [clickedIndices]);

  const generateWord = () => {
    const wordsArray = sentenceList[currentNum].fr.split(" ");
    setNewArray([...wordsArray]);
  };

  const choseWord = (word, i) => {
    if (!clickedIndices.includes(i)) {
      setClickedIndices([...clickedIndices, i]);
      setCheckArray([...checkArray, newArray[i]]);
    }
  };

  const checkBuiltSentence = () => {
    console.log(checkArray, newArray);
    let success = true;
    for (let i = 0; i < checkArray.length; i++) {
      if (checkArray[i] !== newArray[i]) {
        success = false;
        break;
      }
    }
    console.log("Du klarade meningen:", success);
  };

  return (
    <div className="sentences">
      <div className="sentence">{getSentence()}</div>
      {/* {generateBoxes()} */}
      <div className="check-area">
        {checkArray.map((word, i) => {
          return (
            <p key={i} className="word">
              {word}
            </p>
          );
        })}
      </div>

      <div className="answer-box">
        {newArray.map((word, i) => {
          return (
            <p
              key={i}
              className={clickedIndices.includes(i) ? "word hide" : "word"}
              onClick={() => choseWord(word, i)}
            >
              {word}
            </p>
          );
        })}
      </div>
      <button className="correct-btn" onClick={checkBuiltSentence}>
        Rätta
      </button>
      <p>Klicka på orden i rätt ordning</p>
    </div>
  );
};
