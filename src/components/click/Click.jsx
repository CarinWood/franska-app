import React, { useEffect, useState } from 'react'
import './click.css'
import { QuizAlternative } from '../quizAlternative/QuizAlternative'
import { FaRedo } from "react-icons/fa";

const Click = ({wordList}) => {
    const [originalArray, setOriginalArray] = useState(wordList)
    const [wordArray, setWordArray] = useState(wordList)
    const [currObj, setCurrObj] = useState(0)
    const [currentFrench, setCurrentFrench] = useState(originalArray[0])
    const [guessArray, setGuessArray] = useState([])
    const [finishedCard, showFinishedCard] = useState(false);


    useEffect(() => {
        setCurrentWords()
    }, [currObj])

 
    const shuffleArray = (array) => {
        array.sort(() => Math.random() - 0.5);
    }
 

    const setCurrentWords = () => {
        console.log(originalArray)
        const currentWord = {
            id: originalArray[currObj].id,
            fr: originalArray[currObj].fr,
            sv: originalArray[currObj].sv
        };
        setCurrentFrench(currentWord);
    

        // Initialize an array to store the guesses
        const guesses = [];
       // Push guess1 into the array
       guesses.push(currentWord);
    
        // Select one guess randomly from the wordArray array until we have 4 guesses
        while (guesses.length < 5) {
            // Get a random index within the range of remainingWords length
    /*         shuffleArray(wordArray) */

            const randomIndex = Math.floor(Math.random() * wordArray.length);

            const exists = guesses.some(guess => guess.sv === wordArray[randomIndex].sv);

            if (!exists) {
                guesses.push(wordArray[randomIndex]);
            }
           
        }
            // Shuffle the array to randomize the order
            shuffleArray(guesses);
            shuffleArray(guesses);
            shuffleArray(guesses); 

           setGuessArray(guesses)
    
    };
    
  

     const nextWord = () => {
        if (currObj + 1 >= originalArray.length) {
            // Game is finished, trigger the popup
           showFinishedCard(true)
            // You can also reset the game or perform any other action here
        } else {
            // Move to the next word
            setCurrObj(currObj + 1);
        }
    }; 
    

    const resetGame = () => {
        showFinishedCard(false)
        setCurrObj(0)
    }



  return (
    <div>
        {finishedCard &&
         <div className="match-finished">
          <h3 className="match-headline">Övningen avklarad</h3>
          <p className="match-text">Du har svarat rätt på alla orden!</p>
          <button className="button-start-again" onClick={resetGame}>
            <FaRedo className="practice-again-icon" />
            Öva igen
          </button>
        </div>
        }
        {!finishedCard &&
        <>
        <p className='french-correct'>{currentFrench.fr}</p>
      
        <div className='alternatives'>
            {guessArray.map((word, i) => {
                return (
                        <div key={i}>
                            {<QuizAlternative 
                            word={word} 
                            nextWord={nextWord}
                            currentFrench={currentFrench}
                            />}
                        </div>
                        )
            })}
        </div>

        <p className='instructions click-instructions'>Klicka på rätt svensk översättning</p>
        </>
        }
        </div>

  )
}

export default Click