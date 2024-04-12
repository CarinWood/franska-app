import React, { useState } from 'react'
import Back from '../components/buttons/back/Back';
import { Menu } from '../components/menu/Menu';
import Carousel from '../components/carousel/Carousel';
import { Spell } from '../components/spell/Spell';
import { Match } from '../components/match/Match';
import { SixthList, SixthMatchList } from '../data/Sixth';
import Click from '../components/click/Click';

const Six = () => {
    const [showFlash, setShowFlash] = useState(false);
    const [showSpell, setShowSpell] = useState(false);
    const [showMatch, setShowMatch] = useState(false);
    const [showClick, setShowClick] = useState(false);
  return (
    <div className="container">
      <Back />
      <Menu
        setShowFlash={setShowFlash}
        setShowSpell={setShowSpell}
        setShowMatch={setShowMatch}
        setShowClick={setShowClick}
      />
      {showFlash && <Carousel flashcardList={SixthList} />}
      {showSpell && <Spell wordList={SixthList} />}
      {showMatch && <Match wordList={SixthMatchList} />}
      {showClick && <Click wordList={SixthMatchList} />}
    </div>
  )
}

export default Six