import { useState } from "react";
import "./menu.css";
import { BsCardText, BsPencil, BsSpellcheck } from "react-icons/bs";

export const Menu = ({ setShowFlash, setShowSpell }) => {
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

  return (
    <div className={menuAway ? "menu away" : "menu"}>
      <p className="menu-headline">Hur vill du träna?</p>
      <ul className="menu-list">
        <li onClick={flash}>
          <BsCardText className="icon" />
          <p>Flashcards</p>
        </li>

        <li onClick={spell}>
          <BsPencil className="icon" />
          <p>Skriv orden</p>
        </li>
      </ul>
    </div>
  );
};
