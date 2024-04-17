import React, { useEffect, useState } from "react";
import "../styles/verbs.css";
import { VerbArrayIrregular, headingsArrayIrregular } from "../data/VerbArray";
import VerbMenu from "../components/verbMenu/VerbMenu";
import BackForVerb from "../components/buttons/backForVerb/BackForVerb";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp  } from "react-icons/io5";


export const Verbs = () => {
  const [menu, showMenu] = useState(true)
  const [verbChoice, setVerbChoice] = useState(0)
  const [currentNum, setCurrentNum] = useState(0)
  const [verbArray, setVerbArray] = useState(VerbArrayIrregular[currentNum])
  const [num, setNum] = useState(0)
 


  const typeInAnswer = (e, id) => {
    const foundObject = verbArray.find(verb => verb.id === id)
    
    if(foundObject) {
      foundObject.answer = e.target.value
    } 

  }

  const checkIfCorrect = () => {
    const tempArray = verbArray.map((verb) => {
      return verb.fr === verb.answer ? { ...verb, correct: true} : {...verb, correct: false}
    })
    
    setVerbArray(tempArray)

    setNum(tempArray.filter((verb) => verb.correct).length)

  };

  const nextSet = () => {
    setNum(0)
    setCurrentNum(currentNum + 1)
    setVerbArray(VerbArrayIrregular[currentNum + 1])

  }

  useEffect(() => {
    console.log(verbArray)
  }, [verbArray, num, currentNum]);

  return (
    <div className="verbs-page">
        <BackForVerb  />
        {menu && <VerbMenu showMenu={showMenu} setVerbChoice={setVerbChoice}/>}
        {!menu && 
        <>
        <div className="verbs-table">
        <h4 className="headline-text">{headingsArrayIrregular[currentNum]}</h4>
        <div>
          <div>
            {verbArray.map((verb) => {
              return (
                <div key={verb.id} className="verb-item">
                  <p className="swedish">{verb.sv}</p>
                  <p className="pronoun">{verb.pronoun}</p>
                  <div className="word-box">
                    <input 
                      key={verb.id}
                      type="text" 
                      maxLength={9}
                      onChange={(e) => typeInAnswer(e, verb.id)}
                    />
                  </div>
                  <div>
                    {verb.correct === true ? <div className="icon-div"><FaCheck className="check-icon" /></div>
                    : verb.correct === false ? <div className="icon-div"><IoCloseSharp className="close-icon"/></div>
                    : <></>
                    }
                  </div>
                </div>  
              );
            })}
          </div>
        </div>
      </div>

      {num === 6 ? <button className="continue-button" onClick={nextSet}>Fortsätt</button>
      : <button className="button-answer" onClick={checkIfCorrect}>Svara</button>
      }


      <p className="instructions-text">Skriv in rätt verbböjning i rutorna</p>
      </>
      }
    
    </div>

  );
};
