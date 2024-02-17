import React, { useState } from "react";
import Back from "../components/buttons/back/Back";
import { Menu } from "../components/menu/Menu";
import Carousel from "../components/carousel/Carousel";
import { Spell } from "../components/spell/Spell";
import { Match } from "../components/match/Match";
import { FourthList, FourthMatchList } from "../data/fourth";

export const Four = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [showSpell, setShowSpell] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  return (
    <div className="container">
      <Back />
      <Menu
        setShowFlash={setShowFlash}
        setShowSpell={setShowSpell}
        setShowMatch={setShowMatch}
      />
      {showFlash && <Carousel flashcardList={FourthList} />}
      {showSpell && <Spell wordList={FourthList} />}
      {showMatch && <Match wordList={FourthMatchList} />}
    </div>
  );
};
