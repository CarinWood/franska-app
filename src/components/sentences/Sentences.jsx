import { useEffect, useState } from "react";
import "./sentences.css";
import { GrFormCheckmark } from "react-icons/gr";

export const Sentences = ({ sentenceList }) => {
  /*   const [boxes, setBoxes] = useState([]); */
  const [currentNum, setCurrentNum] = useState(0);
  const [newArray, setNewArray] = useState([]);
  const [checkArray, setCheckArray] = useState([]);
  const [clickedIndices, setClickedIndices] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const getSentence = () => {
    return <p>{sentenceList[currentNum].sv}</p>;
  };

  useEffect(() => {
    generateWord();
  }, []);

  useEffect(() => {}, [clickedIndices]);

  const shuffleArray = (arr) => {
    arr.sort((a, b) => 0.5 - Math.random());
  };

  const generateWord = () => {
    const wordsArray = sentenceList[currentNum].fr.split(" ");
    shuffleArray(wordsArray);
    setNewArray([...wordsArray]);
  };

  const choseWord = (word, i) => {
    if (!clickedIndices.includes(i)) {
      setClickedIndices([...clickedIndices, i]);
      setCheckArray([...checkArray, newArray[i]]);
    }
  };

  const checkBuiltSentence = () => {
    let won = true;
    let newWord = "";
    for (let i = 0; i < checkArray.length; i++) {
      newWord += checkArray[i] + " ";
    }
    newWord.trim();

    let correctWord = sentenceList[currentNum].fr;
    for (let i = 0; i < correctWord.length; i++) {
      if (correctWord.charAt(i) !== newWord.charAt(i)) {
        won = false;
        break;
      }
    }

    if (won === true) {
      setCurrentNum(currentNum + 1);
      setIsCorrect(true);
    }
    console.log(won);
  };

  const resetAndNext = () => {
    setCheckArray([]);
    setIsCorrect(false);
    setClickedIndices([]);
    generateWord();
  };

  return (
    <div className="sentences">
      <div className="sentence">{getSentence()}</div>
      <div className="check-area">
        {checkArray.map((word, i) => {
          return (
            <p key={i} className="word">
              {word}
            </p>
          );
        })}
      </div>
      <div className={isCorrect ? "right-message" : "right-message hide"}>
        <GrFormCheckmark className="right-icon" /> <p>Rätt!</p>
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
      {isCorrect ? (
        <button className="next-word-btn" onClick={resetAndNext}>
          Nästa ord
        </button>
      ) : (
        <button className="correct-btn" onClick={checkBuiltSentence}>
          Rätta
        </button>
      )}
      <p>Klicka på orden i rätt ordning</p>
    </div>
  );
};
