import "./menu.css";
import { BsCardText, BsPencil } from "react-icons/bs";
import { PiCardsLight } from "react-icons/pi";
import { HiOutlineCursorClick } from "react-icons/hi";

export const Menu = ({ 
  setShowFlash,
  setShowSpell, 
  setShowMatch,
  setShowClick, 
  setMenuAway,
  menuAway }) => {
 

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
  const click = () => {
    setMenuAway(true);
    setTimeout(() => {
      setShowClick(true);
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
        
        <li onClick={click} className="lower-item">
          <HiOutlineCursorClick className="icon" />
          <p>Klicka</p>
        </li>
      </ul>
    </div>
  );
};
