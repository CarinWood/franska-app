import './verbItem.css'

const VerbItem = ({person, subject, verb}) => {
  return (
    <>
    <div className='wrapper'>
        <p className="person">{person}</p>
        <p className="subject">{subject}</p>
    </div>

    <div className="verb-border">
        <p className="verb-item">{verb}</p>
    </div>
   
    </>
  )
}

export default VerbItem