import { Link } from "react-router-dom";
import "../styles/overview.css";
import { BsPencil } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";

const Overview = () => {
  return (
    <div className="overview">
      <p className="overview-heading">Glosor ur Édito A1</p>

      <div className="chapters">
        <ul>
          <Link to="/kapitel_0" className="list-item">
            Unité 0
          </Link>
          <Link to="/kapitel_1" className="list-item">
            Unité 1
          </Link>
          <Link to="/kapitel_2" className="list-item">
            Unité 2
          </Link>
          <Link to="/kapitel_3" className="list-item">
            Unité 3
          </Link>
          <Link to="/kapitel_4" className="list-item">
            Unité 4
          </Link>
          <Link to="/kapitel_5" className="list-item">
            Unité 5
          </Link>
        </ul>

        <ul>
          <Link to="/kapitel_6" className="list-item">
            Unité 6
          </Link>
          <Link to="/kapitel_7" className="list-item">
            Unité 7
          </Link>
          <Link to="/kapitel_8" className="list-item ">
            Unité 8
          </Link>
          <Link to="/kapitel_9" className="list-item ">
            Unité 9
          </Link>
          <Link to="/kapitel_10" className="list-item">Unité 10</Link>
        </ul>
      </div>
      <div className="specials-container">
          <article className="first-row">
          <ul className="specials">
            <Link to="/sentences" className="list-item-2">
              <BsPencil className="overview-icon" />
              bygg meningar
            </Link>
          </ul>
        <ul className="specials">
            <Link to="/verb_presens" className="list-item-2">
              <FiBook className="overview-icon" />
              böj verb i presens
            </Link>
          </ul>  
          </article>
          <article className="second-row">
          <ul className="specials">
            <Link to="/verb_presens" className="list-item-2">
              <IoRocketOutline className="overview-icon" />
              böj verb i futurum
            </Link>
          </ul>  
          <ul className="specials">
            <Link to="/verb_presens" className="list-item-2">
              <IoRocketOutline className="overview-icon" />
              böj verb i imperfekt
            </Link>
          </ul>  
          </article>
      </div>
      <p className="credits">&copy;2024 <a href="https://carinwood-eng-cv.netlify.app/" target="_blank" rel="noreferrer">Carin Wood</a></p>
    </div>
  );
};

export default Overview;
