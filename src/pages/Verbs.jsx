import React, { useEffect, useState } from "react";
import "../styles/verbs.css";
import { VerbArrayIrregular } from "../data/VerbArray";
import VerbMenu from "../components/verbMenu/VerbMenu";
import BackForVerb from "../components/buttons/backForVerb/BackForVerb";
import { FaCheck } from "react-icons/fa";


export const Verbs = () => {
  const [menu, showMenu] = useState(true)
  const [verbChoice, setVerbChoice] = useState(0)
  const [currentNum, setCurrentNum] = useState(0)
  const [verbArray, setVerbArray] = useState(VerbArrayIrregular[currentNum])
 




  const typeInAnswer = (e, id) => {

    const foundObject = verbArray.find(verb => verb.id === id)
    
    if(foundObject) {
      foundObject.answer = e.target.value
    } 

  }

    

  
 

  const checkIfCorrect = () => {
    console.log(verbArray)
    
  };

  useEffect(() => {}, [verbArray]);

  return (
    <div className="verbs-page">
        <BackForVerb  />
        {menu && <VerbMenu showMenu={showMenu} setVerbChoice={setVerbChoice}/>}
        {!menu && 
        <>
        <div className="verbs-table">
        <h4 className="headline-text">Avoir</h4>
        <div>
          <div>
            {verbArray.map((verb) => {
              return (
                <div key={verb.id} className="verb-item">
                  <p className="swedish">{verb.sv}</p>
                  <p className="pronoun">{verb.pronoun}</p>
                  <div className="word-box">
                    <input 
                      type="text" 
                      maxLength={9}
                      onChange={(e) => typeInAnswer(e, verb.id)}
                    />
                  </div>
                  <div>
                    {verb.correct === "wrong" ? <FaCheck /> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      <button className="button-answer" onClick={checkIfCorrect}>Svara</button>


      <p className="instructions-text">Skriv in rätt verbböjning i rutorna</p>
      </>
      }
    
    </div>

  );
};
