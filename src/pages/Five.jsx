import React, { useState } from 'react'
import { fifthList } from '../data/Fifth';
import Back from '../components/buttons/back/Back';
import { Menu } from '../components/menu/Menu';
import Carousel from '../components/carousel/Carousel';
import { Spell } from '../components/spell/Spell';
import { Match } from '../components/match/Match';
import Click from '../components/click/Click';

const Five = () => {
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
      {showFlash && <Carousel flashcardList={fifthList} />}
      {showSpell && <Spell wordList={fifthList} />}
      {showMatch && <Match wordList={fifthList} />}
      {showClick && <Click wordList={fifthList} />}
    </div>
  )
}

export default Five