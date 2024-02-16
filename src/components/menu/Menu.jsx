import { useState } from "react";
import "./menu.css";
import { BsCardText, BsPencil } from "react-icons/bs";
import { PiCardsLight } from "react-icons/pi";

export const Menu = ({ setShowFlash, setShowSpell, setShowMatch }) => {
  const [menuAway, setMenuAway] = useState(false);

  const flash = () => {
    setMenuAway(true);
    setTimeout(() => {
      setShowFlash(true);
    }, 100);
  };

  const spell = () => {
    setMenuAway(true);
    setTimeout(() => {
      setShowSpell(true);
    }, 100);
  };

  const match = () => {
    setMenuAway(true);
    setTimeout(() => {
      setShowMatch(true);
    }, 100);
  };

  return (
    <div className={menuAway ? "menu away" : "menu"}>
      <p className="menu-headline">Vad vill du träna?</p>
      <ul className="menu-list">
        <li onClick={flash}>
          <BsCardText className="icon" />
          <p>Flashcards</p>
        </li>

        <li onClick={spell}>
          <BsPencil className="icon" />
          <p>Skriv orden</p>
        </li>

        <li onClick={match} className="lower-item">
          <PiCardsLight className="icon" />
          <p>Matcha</p>
        </li>
      </ul>
    </div>
  );
};
