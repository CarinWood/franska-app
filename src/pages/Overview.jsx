import { Link } from "react-router-dom";
import "../styles/overview.css";

const Overview = () => {
  return (
    <div className="overview">
      <ul>
        <Link to="/kapitel_2" className="list-item">
          Unité 2
        </Link>
        <Link to="/kapitel_3" className="list-item">
          Unité 3
        </Link>
      </ul>
    </div>
  );
};

export default Overview;
