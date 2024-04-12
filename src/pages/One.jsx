import React, { useState } from "react";
import Back from "../components/buttons/back/Back";
import Carousel from "../components/carousel/Carousel";
import { FirstList } from "../data/First";
import { Menu } from "../components/menu/Menu";
import { Spell } from "../components/spell/Spell";
import { firstMatchList } from "../data/First";
import { Match } from "../components/match/Match";
import Click from "../components/click/Click";

export const One = () => {
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
      {showFlash && <Carousel flashcardList={FirstList} />}
      {showSpell && <Spell wordList={FirstList} />}
      {showMatch && <Match wordList={firstMatchList} />}
      {showClick && <Click wordList={firstMatchList} />}
 
    </div>
  );
};
