import "../styles/three.css";
import { ThirdList } from "../data/Third";
import Carousel from "../components/carousel/Carousel";
import Back from "../components/buttons/back/Back";
import { useState } from "react";
import { Menu } from "../components/menu/Menu";
import { Spell } from "../components/spell/Spell";
import { Match } from "../components/match/Match";
import { thirdMatchList } from "../data/Third";
import Click from "../components/click/Click";

export const Three = () => {
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
      {showFlash && <Carousel flashcardList={ThirdList} />}
      {showSpell && <Spell wordList={ThirdList} />}
      {showMatch && <Match wordList={thirdMatchList} />}
      {showClick && <Click wordList={thirdMatchList} />}
    </div>
  );
};
