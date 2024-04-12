import Back from "../components/buttons/back/Back";
import Carousel from "../components/carousel/Carousel";
import { ZeroList } from "../data/Zero";
import "../styles/zero.css";
import { useState } from "react";
import { Spell } from "../components/spell/Spell";
import { Menu } from "../components/menu/Menu";
import { Match } from "../components/match/Match";
import { zeroMatchList } from "../data/Zero"
import Click from "../components/click/Click";
import { CiBookmark } from "react-icons/ci";

export const Zero = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [showSpell, setShowSpell] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const [menuAway, setMenuAway] = useState(false);


  return (
    <div className="container">
      
      <div className="chapter-name">
        <CiBookmark className="bookmark"/>
        <p> Unité 0</p>
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
      {showFlash && <Carousel flashcardList={ZeroList} />}
      {showSpell && <Spell wordList={ZeroList} />}
      {showMatch && <Match wordList={zeroMatchList} />}
      {showClick && <Click wordList={zeroMatchList} />}
    </div>
  );
};

