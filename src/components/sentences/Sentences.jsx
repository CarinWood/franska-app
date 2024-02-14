import { useEffect, useState } from "react";
import "./sentences.css";
import { GrFormCheckmark } from "react-icons/gr";
import { FaRedo } from "react-icons/fa";

export const Sentences = ({ sentenceList }) => {
  /*   const [boxes, setBoxes] = useState([]); */
  const [currentNum, setCurrentNum] = useState(0);
  const [newArray, setNewArray] = useState([]);
  const [checkArray, setCheckArray] = useState([]);
  const [clickedIndices, setClickedIndices] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [oldSentence, setOldSentence] = useState("");
  const [gameOver, setGameOver] = useState(false);

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
      setOldSentence(sentenceList[currentNum].sv);
      setIsCorrect(true);
      setCurrentNum(0);
      if (currentNum === sentenceList.length - 1) {
        setGameOver(true);
      } else {
        setCurrentNum(currentNum + 1);
      }
    }
    console.log(won);
  };

  const resetAndNext = () => {
    setCheckArray([]);
    setIsCorrect(false);
    setClickedIndices([]);
    generateWord();
  };

  const resetExercise = () => {
    setCheckArray([]);
    setIsCorrect(false);
    setClickedIndices([]);
    generateWord();
    setGameOver(false);
  };
  return (
    <>
      {gameOver ? (
        <div className="game-over-card">
          <p className="finished-heading">
            <GrFormCheckmark className="checkmark" />
            Övningen avklarad!
          </p>
          <div className="try-again-buttons">
            <button onClick={resetExercise}>
              <FaRedo className="redo-icon" />
              Öva igen
            </button>
          </div>
        </div>
      ) : (
        <div className="sentences">
          {isCorrect ? (
            <div className="sentence">{oldSentence}</div>
          ) : (
            <div className="sentence">{getSentence()}</div>
          )}

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
      )}
    </>
  );
};
