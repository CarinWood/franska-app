import Back from "../components/buttons/back/Back";
import Carousel from "../components/carousel/Carousel";
import "../styles/two.css";
import { SecondList } from "../data/Second";
import { useState } from "react";
import { Menu } from "../components/menu/Menu";
import { Spell } from "../components/spell/Spell";
import { secondMatchList } from "../data/Second";
import { Match } from "../components/match/Match";

export const Two = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [showSpell, setShowSpell] = useState(false);
  const [showMatch, setShowMatch] = useState(false);

  return (
    <div className="container">
    <Back />
    <Menu setShowFlash={setShowFlash} setShowSpell={setShowSpell} setShowMatch={setShowMatch}/>
    {showFlash && <Carousel flashcardList={SecondList} />}
    {showSpell && <Spell wordList={SecondList} />}
    {showMatch && <Match wordList={secondMatchList} />}
  </div>
  );
};
