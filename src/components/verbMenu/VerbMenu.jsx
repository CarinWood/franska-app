import './verbMenu.css'

const VerbMenu = ({showMenu, setVerbChoice}) => {

    const clickOnChoice = (choice) => {
        showMenu(false)
        setVerbChoice(choice)

    }


  return (
        <section className='verb-menu'>
            <article onClick={() =>clickOnChoice(1)}>1:a konjungationen</article>
            <article onClick={() =>clickOnChoice(2)}>2:a konjungationen</article>
            <article onClick={() =>clickOnChoice(3)}>3:a konjungationen</article>
            <article onClick={() =>clickOnChoice(4)}>Oregelbundna verb</article>
        </section>


  )
}

export default VerbMenu