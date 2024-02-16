import React, { useState, useEffect } from "react";
import "./match.css";

export const Match = ({ wordList }) => {
  const [wordArray, setWordArray] = useState(wordList);
  const [svArray, setSvArray] = useState([]);
  const [frArray, setFrArray] = useState([]);
  const [secondChoice, setSecondChoice] = useState();
  const [firstChoice, setFirstChoice] = useState();
  const [rightAnswers, setRightAnswers] = useState(0);
  const [startClicked, isStartClicked] = useState(false);

  useEffect(() => {
    if (firstChoice && secondChoice) {
      checkForMatch();
    }
  }, [firstChoice, secondChoice]);

  useEffect(() => {
    checkForMatch();
  }, [firstChoice, secondChoice]);

  const startGame = () => {
    if (!startClicked) isStartClicked(true);
    const shuffledArray = wordArray.sort(() => Math.random() - 0.5);
    const newSvArray = shuffledArray
      .slice(0, 5)
      .map((word) => ({ ...word, langue: "sv", matched: false }));
    const newFrArray = shuffledArray
      .slice(0, 5)
      .map((word) => ({ ...word, langue: "fr", matched: false }));

    newSvArray.sort(() => Math.random() - 0.5);
    newFrArray.sort(() => Math.random() - 0.5);

    setSvArray(newSvArray);
    setFrArray(newFrArray);
  };

  const checkForMatch = () => {
    if (firstChoice && secondChoice) {
      if (firstChoice.id === secondChoice.id) {
        setRightAnswers(rightAnswers + 1);
        setTimeout(() => {
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
        }, 200);
        console.log(rightAnswers);
        if (rightAnswers === 4) {
          restartGame();
        }
      } else {
      }

      setTimeout(() => {
        setFirstChoice(null);
        setSecondChoice(null);
      }, 200);
    }
  };

  const setChoice = (id, langue, matched) => {
    if (matched) return;
    if (firstChoice) {
      if (firstChoice.langue === langue) {
        setFirstChoice({ id: id, langue: langue });
      } else {
        setSecondChoice({ id: id, langue: langue });
      }
    } else {
      setFirstChoice({ id: id, langue: langue });
    }

    if (firstChoice && secondChoice) checkForMatch();
  };

  const restartGame = () => {
    setRightAnswers(0);
    setTimeout(() => {
      startGame();
    }, 600);
  };

  return (
    <div>
      {!startClicked && (
        <div className="match-start">
          <h3 className="match-headline">Matcha orden</h3>
          <p className="match-text">
            Matcha de franska orden med rätt svensk översättning
          </p>
          <button className="button-start" onClick={startGame}>
            Start
          </button>
        </div>
      )}

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
