import '../back/back.css'
import './backForVerb.css'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

const BackForVerb = () => {
    const navigate = useNavigate()


    const clickOnBackBtn = () => {
        navigate('/')
    }

  return (
    <div className="go-back" onClick={clickOnBackBtn}>
    <MdOutlineArrowBackIos className="back-arrow"/>
      <p>Tillbaka</p>
  </div>
  )
}

export default BackForVerb