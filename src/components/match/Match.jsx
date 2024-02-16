import React, { useState, useEffect } from "react";
import "./match.css";

export const Match = ({ wordList }) => {
  const [wordArray, setWordArray] = useState(wordList);
  const [svArray, setSvArray] = useState([]);
  const [frArray, setFrArray] = useState([]);
  const [secondChoice, setSecondChoice] = useState();
  const [firstChoice, setFirstChoice] = useState();

  useEffect(() => {
    if (firstChoice && secondChoice) {
      checkForMatch();
    }
  }, [firstChoice, secondChoice]);

  useEffect(() => {
    checkForMatch();
  }, [firstChoice, secondChoice]);

  const startGame = () => {
    const shuffledArray = wordArray.sort(() => Math.random() - 0.5);
    const newSvArray = shuffledArray
      .slice(0, 5)
      .map((word) => ({ ...word, langue: "sv", matched: false }));
    const newFrArray = shuffledArray
      .slice(0, 5)
      .map((word) => ({ ...word, langue: "fr", matched: false }));
    setSvArray(newSvArray);
    setFrArray(newFrArray);
  };

  const checkForMatch = () => {
    if (firstChoice && secondChoice) {
      if (firstChoice.id === secondChoice.id) {
        const updatedSvArray = svArray.map((word) => {
          if (word.id === firstChoice.id) {
            return { ...word, matched: true };
          } else {
            return word;
          }
        });

        const updatedFrArray = frArray.map((word) => {
          if (word.id === firstChoice.id) {
            return { ...word, matched: true };
          } else {
            return word;
          }
        });

        setSvArray(updatedSvArray);
        setFrArray(updatedFrArray);
      } else {
      }

    
        setFirstChoice(null);
        setSecondChoice(null);
   
    }
  };

  const setChoice = (id, langue, matched) => {
    if (matched) return;
    if (firstChoice) {
      setSecondChoice({ id: id, langue: langue });
    } else {
      setFirstChoice({ id: id, langue: langue });
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
              <div className="outer-match-box">
                <div
                  id={word.matched ? "fadeaway" : null}
                  onClick={() => setChoice(word.id, word.langue, word.matched)}
                  className={
                    (firstChoice &&
                      firstChoice.id === word.id &&
                      firstChoice.langue === word.langue) ||
                    (secondChoice &&
                      secondChoice.id === word.id &&
                      secondChoice.langue === word.langue)
                      ? "match-card green"
                      : "match-card"
                  }
                  key={word.id}
                >
                  {word.sv}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {frArray.map((word) => {
            return (
              <div className="outer-match-box">
                <div
                  onClick={() => setChoice(word.id, word.langue, word.matched)}
                  id={word.matched ? "fadeaway" : null}
                  className={
                    (firstChoice &&
                      firstChoice.id === word.id &&
                      firstChoice.langue === word.langue) ||
                    (secondChoice &&
                      secondChoice.id === word.id &&
                      secondChoice.langue === word.langue)
                      ? "match-card green"
                      : "match-card"
                  }
                  key={word.id}
                >
                  {word.fr}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
