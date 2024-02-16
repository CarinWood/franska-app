import React, { useState } from 'react'
import Back from '../components/buttons/back/Back'
import Carousel from '../components/carousel/Carousel'
import { FirstList } from '../data/First'
import { Menu } from '../components/menu/Menu'
import { Spell } from '../components/spell/Spell'
import { firstMatchList } from '../data/First'
import { Match } from '../components/match/Match'

export const One = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [showSpell, setShowSpell] = useState(false);
  const [showMatch, setShowMatch] = useState(false);


  return (
    <div className="container">
    <Back />
    <Menu setShowFlash={setShowFlash} setShowSpell={setShowSpell} setShowMatch={setShowMatch}/>
    {showFlash && <Carousel flashcardList={FirstList} />}
    {showSpell && <Spell wordList={FirstList} />}
    {showMatch && <Match wordList={firstMatchList} />}

  </div>
  )
}
