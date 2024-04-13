import { Link } from "react-router-dom";
import "../styles/overview.css";
import { BsPencil, BsBook } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";

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
          <Link className="list-item invisible">Unité 9</Link>
          <Link className="list-item invisible">Unité 10</Link>
        </ul>
      </div>
      <ul className="specials">
        <Link to="/sentences" className="list-item spec">
          <BsPencil className="overview-icon" />
          bygg meningar
        </Link>
      </ul>
    </div>
  );
};

export default Overview;
