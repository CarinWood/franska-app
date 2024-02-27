import React, { useEffect, useState } from "react";
import "../styles/verbs.css";
import { VerbArray } from "../data/VerbArray";
import { GrFormCheckmark } from "react-icons/gr";

export const Verbs = () => {
  const [count, setCount] = useState(1);
  const [hideWord, setHideWord] = useState([]);

  const choseWord = (verb) => {
    let item = VerbArray.find((item) => item.id === count);
    item.answer = verb;
    setHideWord((prevArray) => {
      return [...prevArray, count];
    });
    setCount(count + 1);
  };

  const checkIfCorrect = () => {
    VerbArray.map((object) => {
      if (object.fr === object.answer) {
        return (object.correct = "right");
      } else {
        return (object.correct = "wrong");
      }
    });
  };

  useEffect(() => {}, [count, VerbArray]);

  return (
    <div className="verbs-page">
      <div className="verbs-table">
        <h4 className="headline-text">Avoir</h4>
        <div>
          <div>
            {VerbArray.map((verb) => {
              return (
                <div key={verb.id} className="verb-item">
                  <p className="swedish">{verb.sv}</p>
                  <p className="pronoun">{verb.pronoun}</p>
                  <div className="word-box">
                    <p>{verb.answer}</p>
                  </div>
                  <div>
                    {verb.correct === "wrong" ? <GrFormCheckmark /> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {count < 7 ? (
        <div className="box-with-words">
          {VerbArray.map((verb) => {
            return (
              <div key={verb.id}>
                <p
                  className={
                    hideWord.includes(verb.id)
                      ? "french-verb hide"
                      : "french-verb"
                  }
                  onClick={() => choseWord(verb.fr)}
                >
                  {verb.fr}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="check-box">
          <button className="correct-btn" onClick={checkIfCorrect}>
            <GrFormCheckmark className="check" />
            Rätta
          </button>
        </div>
      )}
    </div>
  );
};
