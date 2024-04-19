import React, { useEffect, useState } from "react";
import "../styles/verbs.css";
import { VerbArrayIrregular, headingsArrSecondCon, headingsArrThirdCon, headingsArrayIrregular, secondConArr, thirdConArr } from "../data/VerbArray";
import VerbMenu from "../components/verbMenu/VerbMenu";
import BackForVerb from "../components/buttons/backForVerb/BackForVerb";
import { FaCheck } from "react-icons/fa6";
import VerbFinishCard from "../components/verbFinishCard/VerbFinishCard";
import { firstConArr } from "../data/VerbArray";
import { headingsArrFirstCon } from "../data/VerbArray";



export const Verbs = () => {
  const [menu, showMenu] = useState(true)
  const [verbChoice, setVerbChoice] = useState(0)
  const [currentNum, setCurrentNum] = useState(0)
  const [verbArray, setVerbArray] = useState()
  const [headingArray, setHeadingArray] = useState()
  const [num, setNum] = useState(0)
  const [verbsFinished, setVerbsFinished] = useState(false)


  const setArrays = (choice) => {
    if(choice === 1) {
      setHeadingArray(headingsArrFirstCon)
      setVerbArray(firstConArr[currentNum])
    
    } else if (choice === 2) {
      setHeadingArray(headingsArrSecondCon)
      setVerbArray(secondConArr[currentNum])
    
    } else if (choice === 3) {
      setHeadingArray(headingsArrThirdCon)
      setVerbArray(thirdConArr[currentNum])
    }
    
    else {
      setVerbArray(VerbArrayIrregular[currentNum])
      setHeadingArray(headingsArrayIrregular)
    }
  }


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
    
    if(verbChoice === 1 && currentNum + 1 >= firstConArr.length) {
      setVerbsFinished(true)
      return

    } else if (verbChoice === 2 && currentNum + 1 >= secondConArr.length) {
      setVerbsFinished(true)
    
    } else if (verbChoice === 4 && currentNum + 1 === VerbArrayIrregular.length) {
      setVerbsFinished(true)
    
    } else if (verbChoice === 3 && currentNum + 1 === thirdConArr.length) {
      setVerbsFinished(true)
    
    } else {
      setCurrentNum(currentNum + 1)
      setVerbArray(verbChoice === 1 ? firstConArr[currentNum + 1] 
      : verbChoice === 2 ? secondConArr[currentNum + 1]  
        : VerbArrayIrregular[currentNum + 1]);

      } 
     }

  useEffect(() => {

  }, [verbArray, num, currentNum]);

  

  return (
    <div className="verbs-page">
        <BackForVerb menu={menu} showMenu={showMenu} />
        {verbsFinished ? 
            <VerbFinishCard 
                setCurrentNum={setCurrentNum} 
                setVerbsFinished={setVerbsFinished} 
                verbArray={verbArray} 
                setVerbArray={setVerbArray}
                setHeadingArray={setHeadingArray} 
                verbChoice={verbChoice}
                currentNum={currentNum}
            /> :
        <>
        {menu && <VerbMenu 
            showMenu={showMenu} 
            setVerbChoice={setVerbChoice} 
            setArrays={setArrays}
            setCurrentNum={setCurrentNum}
            currentNum={currentNum}
        />}
        {!menu && 
        <form className="verbs-table">
             <h4 className="headline-text">{headingArray[currentNum]}</h4>
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
                      maxLength={11}
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
