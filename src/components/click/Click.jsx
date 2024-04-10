import React, { useEffect, useState } from 'react'
import './click.css'
import { QuizAlternative } from '../quizAlternative/QuizAlternative'

const Click = ({wordList}) => {
    const [originalArray, setOriginalArray] = useState(wordList)
    const [wordArray, setWordArray] = useState(wordList)
    const [currObj, setCurrObj] = useState(0)
    const [currentFrench, setCurrentFrench] = useState(originalArray[0])
    const [guessArray, setGuessArray] = useState([])

 

    useEffect(() => {
        setCurrentWords()
    }, [wordArray])


  


    const shuffleArray = (array) => {
        array.sort(() => Math.random() - 0.5);
    }


    const setCurrentWords = () => {
        const currentWord = {
            id: originalArray[currObj].id,
            fr: originalArray[currObj].fr,
            sv: originalArray[currObj].sv
        };
        setCurrentFrench(currentWord);
    
        const updatedOriginalArray = originalArray.filter(item => item.id !== currentWord.id);
        setOriginalArray(updatedOriginalArray);

        // Initialize an array to store the guesses
        const guesses = [];
       // Push guess1 into the array
       guesses.push(currentWord);
    
        // Select one guess randomly from the wordArray array until we have 4 guesses
        while (guesses.length < 5) {
            // Get a random index within the range of remainingWords length
            shuffleArray(wordArray)

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
        setCurrObj(currObj + 1)
        setCurrentWords()
    }

 /*    const nextWord = () => {
        if (currObj + 1 >= originalArray.length) {
            // Game is finished, trigger the popup
            alert("Congratulations! You have completed the game.");
            // You can also reset the game or perform any other action here
        } else {
            // Move to the next word
            setCurrObj(currObj + 1);
            setCurrentWords();
        }
    }; */
    



  return (
    <div>
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
    </div>
  )
}

export default Click