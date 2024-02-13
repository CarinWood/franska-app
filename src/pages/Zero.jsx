import Back from "../components/buttons/back/Back";
import Carousel from "../components/carousel/Carousel";
import { ZeroList } from "../data/Zero";
import "../styles/zero.css";
import { useState } from "react";
import { Spell } from '../components/spell/Spell'

export const Zero = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [showSpell, setShowSpell] = useState(true);
  return (
    <div className="container">
      <Back />
      {showFlash && <Carousel flashcardList={ZeroList} />}
      {showSpell && <Spell wordList={ZeroList}/>}
    </div>
  );
};
