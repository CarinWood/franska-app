import Back from "../components/buttons/back/Back";
import Carousel from "../components/carousel/Carousel";
import { ZeroList } from "../data/Zero";
import "../styles/zero.css";
import { useState } from "react";
import { Spell } from "../components/spell/Spell";
import { Menu } from "../components/menu/Menu";

export const Zero = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [showSpell, setShowSpell] = useState(false);
  return (
    <div className="container">
      <Back />
      <Menu setShowFlash={setShowFlash} setShowSpell={setShowSpell}/>
      {showFlash && <Carousel flashcardList={ZeroList} />}
      {showSpell && <Spell wordList={ZeroList} />}
    </div>
  );
};
