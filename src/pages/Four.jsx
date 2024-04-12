import React, { useState } from "react";
import Back from "../components/buttons/back/Back";
import { Menu } from "../components/menu/Menu";
import Carousel from "../components/carousel/Carousel";
import { Spell } from "../components/spell/Spell";
import { Match } from "../components/match/Match";
import { FourthList, FourthMatchList } from "../data/fourth";
import Click from "../components/click/Click";

export const Four = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [showSpell, setShowSpell] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const [menuAway, setMenuAway] = useState(false);

  return (
    <div className="container">
      <Back 
        setShowFlash={setShowFlash}
        showFlash={showFlash}
        setShowSpell={setShowSpell}
        showSpell={showSpell}
        setShowMatch={setShowMatch}
        showMatch={showMatch}
        setShowClick={setShowClick}
        setMenuAway={setMenuAway}
        menuAway={menuAway}
      />
      <Menu
      setShowFlash={setShowFlash}
      setShowSpell={setShowSpell}
      setShowMatch={setShowMatch}
      setShowClick={setShowClick}
      setMenuAway={setMenuAway}
      menuAway={menuAway}
      />
      
      {showFlash && <Carousel flashcardList={FourthList} />}
      {showSpell && <Spell wordList={FourthList} />}
      {showMatch && <Match wordList={FourthMatchList} />}
      {showClick && <Click wordList={FourthMatchList} />}
    </div>
  );
};
