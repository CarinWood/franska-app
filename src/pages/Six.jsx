import React, { useState } from 'react'
import Back from '../components/buttons/back/Back';
import { Menu } from '../components/menu/Menu';
import Carousel from '../components/carousel/Carousel';
import { Spell } from '../components/spell/Spell';
import { Match } from '../components/match/Match';
import { SixthList } from '../data/Sixth';

const Six = () => {
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
      {showFlash && <Carousel flashcardList={SixthList} />}
      {showSpell && <Spell wordList={SixthList} />}
      {showMatch && <Match wordList={SixthList} />}
    </div>
  )
}

export default Six