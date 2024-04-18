import React, { useEffect, useState } from "react";
import "../styles/verbs.css";
import { VerbArrayIrregular, headingsArrayIrregular } from "../data/VerbArray";
import VerbMenu from "../components/verbMenu/VerbMenu";
import BackForVerb from "../components/buttons/backForVerb/BackForVerb";
import { FaCheck } from "react-icons/fa6";
import VerbFinishCard from "../components/verbFinishCard/VerbFinishCard";



export const Verbs = () => {
  const [menu, showMenu] = useState(true)
  const [verbChoice, setVerbChoice] = useState(0)
  const [currentNum, setCurrentNum] = useState(0)
  const [verbArray, setVerbArray] = useState(VerbArrayIrregular[currentNum])
  const [num, setNum] = useState(0)
  const [verbsFinished, setVerbsFinished] = useState(false)


  const typeInAnswer = (e, id) => {
    const foundObject = verbArray.find(verb => verb.id === id)
    
    if(foundObject) {
      foundObject.answer = e.target.value
    } 

  }

  const checkIfCorrect = (e) => {
    e.preventDefault();
    const tempArray = verbArray.map((verb) => {
      return verb.fr === verb.answer ? { ...verb, correct: true} : {...verb, correct: false}
    })
    
    setVerbArray(tempArray)

    setNum(tempArray.filter((verb) => verb.correct).length)

  };

  const nextSet = (e) => {
    e.preventDefault()
    setNum(0)
    console.log(verbArray.length)
    if(currentNum + 1 >= verbArray.length) {
      setVerbsFinished(true)
      return
    }
    setCurrentNum(currentNum + 1)
    setVerbArray(VerbArrayIrregular[currentNum + 1])

  }

  useEffect(() => {
    console.log(verbArray)
  }, [verbArray, num, currentNum]);

  return (
    <div className="verbs-page">
        <BackForVerb  />
        {verbsFinished ? <VerbFinishCard/> :
        <>
        {menu && <VerbMenu showMenu={showMenu} setVerbChoice={setVerbChoice}/>}
        {!menu && 
        <form className="verbs-table">
             <h4 className="headline-text">{headingsArrayIrregular[currentNum]}</h4>
        <div>
     
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
                      autoCapitalize="none"
                      onChange={(e) => typeInAnswer(e, verb.id)}
                    />
                  </div>
                    <div>
                 
                    {verb.correct === false && <div className="icon-div"><FaCheck className="check-icon-red"/></div>}
                
                     {verb.correct === true && <div className="icon-div"><FaCheck className="check-icon" /></div>}
                    </div>
              
                </div>  
              );
            })}
          </div>
        </div>
      </div>

      {num === 6 ? <button className="continue-button" type="submit"  onClick={(e) =>nextSet(e)}>Fortsätt</button>
      : <button className="button-answer" type="submit" onClick={(e) =>checkIfCorrect(e)}>Svara</button>
      }


      <p className="instructions-text">Skriv in rätt verbböjning i rutorna</p>
      </form>
      }
      </>
}
    </div>

  );
};
