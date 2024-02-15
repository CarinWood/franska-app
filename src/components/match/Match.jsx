import React, { useState, useEffect } from "react";
import "./match.css";

export const Match = ({ wordList }) => {
  const [wordArray, setWordArray] = useState(wordList);
  const [svArray, setSvArray] = useState([]);
  const [frArray, setFrArray] = useState([]);
  const [secondChoice, setSecondChoice] = useState(null);
  const [firstChoice, setFirstChoice] = useState(null);
  const [clickedIndices, setClickedIndices] = useState([]);
  const [secClickedIndices, setSecClickedIndices] = useState([]);

  useEffect(() => {}, [clickedIndices]);
  useEffect(() => {
    if (firstChoice && secondChoice) {
      checkForMatch();
    }
  }, [firstChoice, secondChoice]);

  useEffect(() => {
    checkForMatch();
    console.log(svArray);
  }, [firstChoice, secondChoice]);


  useEffect(() => {
    console.log(clickedIndices);
  }, [clickedIndices, secClickedIndices]);

  const startGame = () => {
    const shuffledArray = wordArray.sort(() => Math.random() - 0.5);
    const newSvArray = shuffledArray.slice(0, 5);
    const newFrArray = shuffledArray.slice(0, 5);
    setSvArray(newSvArray);
    setFrArray(newFrArray);
  };

  const checkForMatch = () => {
    if (firstChoice && secondChoice) {
      if (firstChoice === secondChoice) {
        console.log("win");
        let filterSvArray = svArray.filter((word) => word.id !== firstChoice);
        setSvArray(filterSvArray);
        let filterFrArray = frArray.filter((word) => word.id !== firstChoice);
        setFrArray(filterFrArray);
      } else {
      }
      const filteredIndicies = clickedIndices.filter(
        (id) => id !== firstChoice
      );
      setClickedIndices(filteredIndicies);
      const filteredSecIndicies = secClickedIndices.filter(
        (id) => id !== firstChoice
      );
      setSecClickedIndices(filteredSecIndicies);

      setFirstChoice(null);
      setSecondChoice(null);
    }
  };

  const setChoiceLeft = (id) => {
    setClickedIndices([...clickedIndices, id]);
    if (firstChoice) {
      setSecondChoice(id);
    } else {
      setFirstChoice(id);
    }

    if (firstChoice && secondChoice) checkForMatch();
  };

  const setChoiceRight = (id) => {
    setSecClickedIndices([...secClickedIndices, id]);
    if (firstChoice) {
      setSecondChoice(id);
    } else {
      setFirstChoice(id);
    }
    if (firstChoice && secondChoice) checkForMatch();
  };

  return (
    <div>
      <button className="button-start" onClick={startGame}>
        Start
      </button>

      {/* Container for swedish match cards */}
      <section className="match-container">
        <div>
          {svArray.map((word) => {
            return (
              <div
                onClick={() => setChoiceLeft(word.id)}
                className={
                  clickedIndices.includes(word.id)
                    ? "match-card green"
                    : "match-card"
                }
                key={word.id}
              >
                {word.sv}
              </div>
            );
          })}
        </div>
        <div>
          {frArray.map((word) => {
            return (
              <div
                onClick={() => setChoiceRight(word.id)}
                className={
                  secClickedIndices.includes(word.id)
                    ? "match-card green"
                    : "match-card"
                }
                key={word.id}
              >
                {word.fr}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
