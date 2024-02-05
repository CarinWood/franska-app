import { Link } from "react-router-dom";
import "./back.css";

const Back = () => {
  return <Link to="/"><button className="go-back">Tillbaka</button></Link>;
};

export default Back;
