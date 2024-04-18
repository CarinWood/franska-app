import './verbMenu.css'

const VerbMenu = ({showMenu, setVerbChoice, setArrays}) => {

    const clickOnChoice = (choice) => {
        showMenu(false)
        setVerbChoice(choice)
        setArrays(choice)

    }


  return (
        <section className='verb-menu'>
            <article onClick={() =>clickOnChoice(1)}>1:a konjugationen</article>
            <article onClick={() =>clickOnChoice(2)}>2:a konjugationen</article>
            <article onClick={() =>clickOnChoice(3)}>3:a konjugationen</article>
            <article onClick={() =>clickOnChoice(4)}>Oregelbundna verb</article>
        </section>


  )
}

export default VerbMenu