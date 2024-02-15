import { Link } from "react-router-dom";
import "../styles/overview.css";
import { FaFlagCheckered } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";

const Overview = () => {
  return (
    <div className="overview">
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
      </ul>
      <ul>
        <Link to="/sentences" className="list-item spec">
          <BsPencil className="overview-icon" />
          bygg meningar
        </Link>
        <Link to="/challenge" className="list-item spec ">
          <FaFlagCheckered className="overview-icon" />
          Utmaningen
        </Link>
      </ul>
    </div>
  );
};

export default Overview;
