import { useEffect, useState } from "react";
import "./sentences.css";
import { GrFormCheckmark } from "react-icons/gr";
import { FaRedo } from "react-icons/fa";

export const Sentences = ({ sentenceList }) => {
  const [currentNum, setCurrentNum] = useState(0);
  const [newArray, setNewArray] = useState([]);
  const [checkArray, setCheckArray] = useState([]);
  const [clickedIndices, setClickedIndices] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
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
    } else {
      setIsWrong(true);
    }
  };

  const regret = (id) => {
    const filteredArray = checkArray.filter((_, index) => index !== id);
    setCheckArray(filteredArray);

    const filteredIndicies = clickedIndices.filter((_, index) => index !== id);
    setClickedIndices(filteredIndicies);
  };

  const tryAgain = () => {
    setCheckArray([]);
    setClickedIndices([]);
    setIsWrong(false);
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
    <div className="sentence-container">
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
                <p key={i} className="word" onClick={() => regret(i)}>
                  {word}
                </p>
              );
            })}
          </div>
          {isCorrect && (
            <div className="right-message">
              <GrFormCheckmark className="right-icon" /> <p>Rätt!</p>
            </div>
          )}
          {isWrong && (
            <div className="wrong-message">
              <GrFormCheckmark className="wrong-icon" /> <p>Fel!</p>
            </div>
          )}
          {!isCorrect && !isWrong && <div className="placeholder-sent"></div>}
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
              Nästa
            </button>
          ) : isWrong ? (
            <button className="try-btn" onClick={tryAgain}>
              Försök igen
            </button>
          ) : (
            <button className="correct-btn" onClick={checkBuiltSentence}>
              Rätta
            </button>
          )}

          <p className="instructions">Klicka på orden i rätt ordning</p>
        </div>
      )}
    </div>
  );
};
