import React, { useEffect, useState } from 'react'
import './click.css'

const Click = ({wordList}) => {
    const [wordArray, setWordArray] = useState(wordList)
    const [currentFrench, setCurrentFrench] = useState("")
    const [rightGuess, setRightguess] = useState("")
    const [error1, setError1] = useState("")
    const [error2, setError2] = useState("")
    const [error3, setError3] = useState("")
    const [error4, setError4] = useState("")
    const [guessArray, setGuessArray] = useState([])

 

    useEffect(() => {
        setCurrentWords()
    }, [wordArray])

    useEffect(() => {
        populateGuessArray();
    }, [rightGuess, error1, error2, error3, error4]);


    const shuffleArray = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    const setCurrentWords = () => {
        shuffleArray(wordArray)

        setCurrentFrench(wordArray[0].fr)
        setRightguess(wordArray[0].sv)

        const filteredAnswers = wordArray.filter((word) => word.id !== currentFrench.id);
   

        setError1(filteredAnswers[1].sv)
        setError2(filteredAnswers[2].sv)
        setError3(filteredAnswers[3].sv)
        setError4(filteredAnswers[4].sv) 

       
    }

    const populateGuessArray = () => {
        //make a new array for the right answer and the 4 wrong answers
        const newGuessArray = [rightGuess, error1, error2, error3, error4];

        //Shuffle the new array properly five times ...
        shuffleArray(newGuessArray);
        shuffleArray(newGuessArray);
        shuffleArray(newGuessArray);
        shuffleArray(newGuessArray);
        shuffleArray(newGuessArray);

        //Set it in the state array we use for the guesses
        setGuessArray(newGuessArray);
    }


    console.log(wordArray)


  return (
    <div>
        {currentFrench}
      
        <div className='alternatives'>
            {guessArray.map((word, i) => {
                return <div key={i}><p>{word}</p></div>
            })}
        </div>

        <p className='instructions click-instructions'>Klicka på rätt svensk översättning</p>
    </div>
  )
}

export default Click