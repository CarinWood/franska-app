import { useState } from 'react'
import './menu.css'
import { BsCardText } from "react-icons/bs";

export const Menu = () => {
    const [menuAway, setMenuAway] = useState(false)

    const flash = () => {
        setMenuAway(true)
    }

  return (
    <ul className={menuAway ? "menu away": "menu"}>
        <li onClick={flash}>Flashcards <BsCardText/></li>
        <li>Skriv orden</li>
        <li>Para ihop</li>
    </ul>
  )
}
