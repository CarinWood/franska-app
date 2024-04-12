import "./back.css";
import { useNavigate } from 'react-router-dom'

const Back = ({
  setShowSpell, 
  showSpell,
  setShowMatch, 
  showMatch,
  setShowFlash, 
  showFlash,
  setShowClick, 
  showClick,
  setMenuAway,
  menuAway
}) => {

  const navigate = useNavigate()

  const clickOnBack = () => {
    if(!showSpell && !showMatch && !showFlash && !showClick && !menuAway) {
      navigate("/") 
    } else {
      setShowClick(false)
      setShowSpell(false)
      setShowMatch(false)
      setShowFlash(false)
      setMenuAway(false)
    }
    

  }


  return <button onClick={clickOnBack} className="go-back">Tillbaka</button>
};

export default Back;
