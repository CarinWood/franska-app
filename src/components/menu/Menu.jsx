import { useState } from 'react'
import './menu.css'

export const Menu = () => {
    const [menuAway, setMenuAway] = useState(false)

    const flash = () => {
        setMenuAway(true)
    }

  return (
    <ul className={menuAway ? "menu away": "menu"}>
        <li onClick={flash}>Flashcards</li>
        <li>Skriv orden</li>
        <li>Para ihop</li>
    </ul>
  )
}
