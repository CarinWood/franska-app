import { Link } from "react-router-dom";
import "../styles/overview.css";

const Overview = () => {
  return (
    <div className="overview">
      <ul>
        <Link to="/trois" className="list-item">Unité 3</Link>
      </ul>
    </div>
  );
};

export default Overview;
