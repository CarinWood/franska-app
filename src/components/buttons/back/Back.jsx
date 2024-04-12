import "./back.css";
import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIos } from "react-icons/md";

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


  return  (
          <div onClick={clickOnBack} className="go-back">
            <MdOutlineArrowBackIos className="back-arrow"/>
              <p>Tillbaka</p>
          </div>
    )
};

export default Back;
