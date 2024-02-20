import "./spell.css";
import FrenchFlag from "../../assets/img/frenchFlag.png";
import SwedishFlag from "../../assets/img/swedishFlag.png";
import { useState, useRef } from "react";
import { GrFormCheckmark } from "react-icons/gr";
import { WrongCard } from "../wrongCard/WrongCard";
import { RightCard } from "../rightCard/RightCard";
import { FinishedCard } from "../finishedCard/FinishedCard";

export const Spell = ({ wordList }) => {
  const [shiftActive, setShiftActive] = useState(false);
  const [frenchAnswer, setFrenchAnswer] = useState("");
  const [currenObject, setCurrentObject] = useState(0);
  const [frenchWord, setFrenchWord] = useState("");
  const [wrongCard, setWrongCard] = useState(false);
  const [rightCard, setRightCard] = useState(false);
  const [finished, setFinished] = useState(false);
  const [quantityRight, setQuantityRight] = useState(0);
  const [quantityWrong, setQuantityWrong] = useState(0);
  const [hardWordsArr, setHardWordsArr] = useState([]);
  const [hardMode, setHardmode] = useState(false);

  const inputRef = useRef(null);

  const startWrite = (e) => {
    setFrenchAnswer(e.target.value);
  };

  const getCurrentWord = () => {
    if (hardMode && currenObject >= 0 && currenObject < hardWordsArr.length) {
      return <p>{hardWordsArr[currenObject].sv}</p>;
    } else {
      return <p>{wordList[currenObject].sv}</p>;
    }
  };
  const getCurrentFrenchWord = () => {
    if (hardMode && currenObject >= 0 && currenObject < hardWordsArr.length) {
      return <span>{hardWordsArr[currenObject].fr}</span>;
    } else {
      return <span>{wordList[currenObject].fr}</span>;
    }
  };

  const pressShift = (e) => {
    e.preventDefault();
    setShiftActive(!shiftActive);
  };

  const clickAnswer = (e) => {
    e.preventDefault();
    if (hardMode) {
      submitHardWord();
    } else {
      submitAnswer();
    }
  };

  const submitHardWord = () => {
    if (frenchAnswer === hardWordsArr[currenObject].fr) {
      setQuantityRight(quantityRight + 1);
      if (wrongCard === true) setWrongCard(false);
      setFrenchWord(frenchAnswer);
      setRightCard(true);
      if (currenObject < hardWordsArr.length - 1) {
        setCurrentObject(currenObject + 1);
      } else {
        setFinished(true);
      }
      setFrenchAnswer("");
    } else {
      setQuantityWrong(quantityWrong + 1);
      if (rightCard === true) setRightCard(false);
      setFrenchWord(frenchAnswer);
      setFrenchAnswer("");
      setWrongCard(true);
    }
  };

  const submitAnswer = () => {
    setShiftActive(false);

    if (frenchAnswer === wordList[currenObject].fr) {
      setQuantityRight(quantityRight + 1);
      if (wrongCard === true) setWrongCard(false);
      setFrenchWord(frenchAnswer);
      setRightCard(true);
      if (currenObject < wordList.length - 1) {
        setCurrentObject(currenObject + 1);
      } else {
        setFinished(true);
      }
      setFrenchAnswer("");
    } else {
      if (!hardMode) {
        const hardWord = {
          id: wordList[currenObject].id,
          fr: wordList[currenObject].fr,
          sv: wordList[currenObject].sv,
        };

        setHardWordsArr((prevArray) => {
          return [...prevArray, hardWord];
        });
      }

      setQuantityWrong(quantityWrong + 1);
      if (rightCard === true) setRightCard(false);
      setFrenchWord(frenchAnswer);
      setFrenchAnswer("");
      setWrongCard(true);
    }
  };

  const addCharacter = (e, num) => {
    e.preventDefault();
    switch (num) {
      case 0:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "Â" : "â"));
        break;
      case 1:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "À" : "à"));
        break;
      case 2:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "Ç" : "ç"));
        break;
      case 3:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "É" : "é"));
        break;
      case 4:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "È" : "è"));
        break;
      case 5:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "Ê" : "ê"));
        break;
      case 6:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "Î" : "î"));
        break;
      case 7:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "Ô" : "ô"));
        break;
      case 8:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "Œ" : "œ"));
        break;
      case 9:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "Û" : "û"));
        break;
      case 10:
        setFrenchAnswer(frenchAnswer + (shiftActive ? "Ù" : "ù"));
        break;
      default:
        setFrenchAnswer(frenchAnswer);
    }

    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      clickAnswer(e);
    }
  };

  const resetExercise = () => {
    setCurrentObject(0);
    setFrenchAnswer("");
    setWrongCard(false);
    setRightCard(false);
    setQuantityRight(0);
    setQuantityWrong(0);
    setHardWordsArr([]);
    setHardmode(false);
  };

  const exerciseFaults = () => {
    setHardmode(true);
    setCurrentObject(0);
    setFrenchAnswer("");
    setWrongCard(false);
    setRightCard(false);
    setQuantityRight(0);
    setQuantityWrong(0);
  };

  return (
    <div className="spell">
      {finished ? (
        <FinishedCard
          setFinished={setFinished}
          resetExercise={resetExercise}
          quantityRight={quantityRight}
          quantityWrong={quantityWrong}
          exerciseFaults={exerciseFaults}
        />
      ) : (
        <div>
          {rightCard && <RightCard frenchWord={frenchWord} />}
          {wrongCard && (
            <WrongCard
              frenchWord={frenchWord}
              getCurrent={getCurrentFrenchWord}
            />
          )}
          {!rightCard && !wrongCard && <p className="placeholder"></p>}

          <div className="outer-container">
            <form className="input-container">
              <div className="swedish-input-wrapper">
                <div className="swedish-flag">
                  <img
                    src={SwedishFlag}
                    alt="swedish flag"
                    className="swedish-flag-img"
                  />
                </div>
                <div className="fake-input">{getCurrentWord()}</div>
              </div>
              <div className="french-input-wrapper">
                <div className="french-flag">
                  <img
                    src={FrenchFlag}
                    alt="french flag"
                    className="french-flag-img"
                  />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Översätt"
                  autoCapitalize="none"
                  value={frenchAnswer}
                  onChange={(e) => startWrite(e)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="buttons">
                <button className="shift" onClick={pressShift}>
                  Shift
                </button>
                <button onClick={(e) => addCharacter(e, 0)}>
                  {shiftActive ? "Â" : "â"}
                </button>
                <button onClick={(e) => addCharacter(e, 1)}>
                  {shiftActive ? "À" : "à"}
                </button>
                <button onClick={(e) => addCharacter(e, 2)}>
                  {shiftActive ? "Ç" : "ç"}
                </button>
                <button onClick={(e) => addCharacter(e, 3)}>
                  {shiftActive ? "É" : "é"}
                </button>
                <button onClick={(e) => addCharacter(e, 4)}>
                  {shiftActive ? "È" : "è"}
                </button>
                <button onClick={(e) => addCharacter(e, 5)}>
                  {shiftActive ? "Ê" : "ê"}
                </button>
                <button onClick={(e) => addCharacter(e, 6)}>
                  {shiftActive ? "Î" : "î"}
                </button>
                <button onClick={(e) => addCharacter(e, 7)}>
                  {shiftActive ? "Ô" : "ô"}
                </button>
                <button onClick={(e) => addCharacter(e, 8)}>
                  {shiftActive ? "Œ" : "œ"}
                </button>
                <button onClick={(e) => addCharacter(e, 9)}>
                  {shiftActive ? "Û" : "û"}
                </button>
                <button onClick={(e) => addCharacter(e, 10)}>
                  {shiftActive ? "Ù" : "ù"}
                </button>
              </div>
              <button
                className="answer-btn"
                type="submit"
                onClick={clickAnswer}
              >
                <GrFormCheckmark className="check" />
                Svara
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
