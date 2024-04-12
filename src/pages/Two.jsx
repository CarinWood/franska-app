import Back from "../components/buttons/back/Back";
import Carousel from "../components/carousel/Carousel";
import "../styles/two.css";
import { SecondList } from "../data/Second";
import { useState } from "react";
import { Menu } from "../components/menu/Menu";
import { Spell } from "../components/spell/Spell";
import { secondMatchList } from "../data/Second";
import { Match } from "../components/match/Match";
import Click from "../components/click/Click";
import { CiBookmark } from "react-icons/ci";

export const Two = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [showSpell, setShowSpell] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const [menuAway, setMenuAway] = useState(false);

  return (
    <div className="container">
       <div className="chapter-name">
            <CiBookmark className="bookmark"/>
            <p> Unité 2</p>
       </div>

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
      
      {showFlash && <Carousel flashcardList={SecondList} />}
      {showSpell && <Spell wordList={SecondList} />}
      {showMatch && <Match wordList={secondMatchList} />}
      {showClick && <Click wordList={secondMatchList} />}
    </div>
  );
};
