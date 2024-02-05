import './card.css'
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export const Card = ({sv, fr}) => {
    const [isFlipped, setIsFlipped] = useState(false);
  

    function flipCard() {
      setIsFlipped(!isFlipped);
    }



  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div className="card" onClick={flipCard}>
        <h1>{fr}</h1>
      </div>
      <div className="card card-back" onClick={flipCard}>
        <h1>{sv}</h1>
      </div>      
    </ReactCardFlip>
  )
}
