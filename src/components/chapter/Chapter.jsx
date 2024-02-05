import './chapter.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Chapter = ({name, num}) => {


  const goToChapter = () => {
    
  }

  return (
    <Link to={num}>
      <div className='chapter' onClick={goToChapter}>
          <p>{name}</p>
      </div>
    </Link>
  )
}
