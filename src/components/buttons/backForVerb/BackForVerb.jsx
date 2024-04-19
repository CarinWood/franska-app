import '../back/back.css'
import './backForVerb.css'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

const BackForVerb = ({menu, showMenu, verbsFinished, setVerbsFinished}) => {
    const navigate = useNavigate()


    const clickOnBackBtn = () => {
      if(menu) {
        navigate('/')
      } else if (verbsFinished) {
        showMenu(true)
        setVerbsFinished(false)
      }else {
        showMenu(true)
      }
      
    }

  return (
    <div className="go-back" onClick={clickOnBackBtn}>
    <MdOutlineArrowBackIos className="back-arrow"/>
      <p>Tillbaka</p>
  </div>
  )
}

export default BackForVerb