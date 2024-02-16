import "../styles/three.css";
import { ThirdList } from "../data/Third";
import Carousel from "../components/carousel/Carousel";
import Back from "../components/buttons/back/Back";
import { useState } from "react";
import { Menu } from "../components/menu/Menu";
import { Spell } from "../components/spell/Spell";
import { Match } from "../components/match/Match";
import { thirdMatchList } from "../data/Third";

export const Three = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [showSpell, setShowSpell] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  return (
    <div className="container">
      <Back />
      <Menu setShowFlash={setShowFlash} setShowSpell={setShowSpell} setShowMatch={setShowMatch}/>
      {showFlash && <Carousel flashcardList={ThirdList}/>}
      {showSpell && <Spell wordList={ThirdList}/>}
      {showMatch && <Match wordList={thirdMatchList}/>}
    </div>
  );
};
