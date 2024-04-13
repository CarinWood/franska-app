import React, { useState } from 'react'
import Back from '../components/buttons/back/Back';
import { Menu } from '../components/menu/Menu';
import Carousel from '../components/carousel/Carousel';
import { Spell } from '../components/spell/Spell';
import { Match } from '../components/match/Match';
import Click from '../components/click/Click';
import { CiBookmark } from "react-icons/ci";
import { eithArray } from '../data/Eith';


const Eight = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [showSpell, setShowSpell] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const [menuAway, setMenuAway] = useState(false);

  return (
    <div className="container">
          <div className="chapter-name">
            <CiBookmark className="bookmark"/>
            <p> Unité 8</p>
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
      {showFlash && <Carousel flashcardList={eithArray} />}
      {showSpell && <Spell wordList={eithArray} />}
      {showMatch && <Match wordList={eithArray} />}
      {showClick && <Click wordList={eithArray} />}
    </div>
  )
}

export default Eight