import React, { useState } from 'react'
import Back from '../components/buttons/back/Back';
import { Menu } from '../components/menu/Menu';
import Carousel from '../components/carousel/Carousel';
import { Spell } from '../components/spell/Spell';
import { Match } from '../components/match/Match';
import { SevenMatchList, SeventhList } from '../data/Seventh';


const Seven = () => {
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
      {showFlash && <Carousel flashcardList={SeventhList} />}
      {showSpell && <Spell wordList={SeventhList} />}
      {showMatch && <Match wordList={SevenMatchList} />}
    </div>
  )
}

export default Seven