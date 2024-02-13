import "./spell.css";
import FrenchFlag from "../../assets/img/frenchFlag.png";
import SwedishFlag from "../../assets/img/swedishFlag.png";
import { useState, useRef } from "react";
import { GrFormCheckmark } from "react-icons/gr";
import { WrongCard } from "../wrongCard/WrongCard";

export const Spell = ({ wordList }) => {
  const [shiftActive, setShiftActive] = useState(false);
  const [frenchAnswer, setFrenchAnswer] = useState("");
  const [currenObject, setCurrentObject] = useState(0);
  const [frenchWord, setFrenchWord] = useState("");
  const [wrongCard, setWrongCard] = useState(false);

  const inputRef = useRef(null);

  const getCurrentWord = () => {
    return <p>{wordList[currenObject].sv}</p>;
  };
  const getCurrentFrenchWord = () => {
    return <span>{wordList[currenObject].fr}</span>;
  };

  const pressShift = (e) => {
    e.preventDefault();
    setShiftActive(!shiftActive);
  };

  const submitAnswer = (e) => {
    e.preventDefault();
    if (frenchAnswer === wordList[currenObject].fr) {
      if(wrongCard === true) setWrongCard(false)
      setCurrentObject(currenObject + 1);
      setFrenchAnswer("");
    } else {
      console.log("false");
      setFrenchWord(frenchAnswer);
      setFrenchAnswer("");
      setWrongCard(true);
    }
  };

  const addCharacter = (e, num) => {
    e.preventDefault();
    switch (num) {
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
      default:
        setFrenchAnswer(frenchAnswer);
    }

    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitAnswer(e);
    }
  };

  return (
    <>
      {wrongCard ?
        <>
       <WrongCard frenchWord={frenchWord} getCurrent={getCurrentFrenchWord}/>
       </>
        :<p className="placeholder"></p>
      }

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
              value={frenchAnswer}
              onChange={(e) => setFrenchAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="buttons">
            <button className="special-btn" onClick={pressShift}>
              Shift
            </button>
            <button className="special-btn" onClick={(e) => addCharacter(e, 1)}>
              {shiftActive ? "À" : "à"}
            </button>
            <button className="special-btn" onClick={(e) => addCharacter(e, 2)}>
              {shiftActive ? "Ç" : "ç"}
            </button>
            <button className="special-btn" onClick={(e) => addCharacter(e, 3)}>
              {shiftActive ? "É" : "é"}
            </button>
            <button className="special-btn" onClick={(e) => addCharacter(e, 4)}>
              {shiftActive ? "È" : "è"}
            </button>
            <button className="special-btn" onClick={(e) => addCharacter(e, 5)}>
              {shiftActive ? "Ê" : "ê"}
            </button>
            <button className="special-btn" onClick={(e) => addCharacter(e, 6)}>
              {shiftActive ? "Î" : "î"}
            </button>
            <button className="special-btn" onClick={(e) => addCharacter(e, 7)}>
              {shiftActive ? "Ô" : "ô"}
            </button>
            <button className="special-btn" onClick={(e) => addCharacter(e, 8)}>
              {shiftActive ? "Œ" : "œ"}
            </button>
            <button className="special-btn" onClick={(e) => addCharacter(e, 9)}>
              {shiftActive ? "Û" : "û"}
            </button>
          </div>
          <button className="answer-btn" type="submit" onClick={submitAnswer}>
            <GrFormCheckmark className="check" />
            Svara
          </button>
        </form>
      </div>
    </>
  );
};
