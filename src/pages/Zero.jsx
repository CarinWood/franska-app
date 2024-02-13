import Back from "../components/buttons/back/Back";
import Carousel from "../components/carousel/Carousel";
import { ZeroList } from "../data/Zero";
import "../styles/zero.css";

export const Zero = () => {
  return (
    <div className="container">
    <Back/>
    <Carousel flashcardList={ZeroList}/>
  </div>
  )
 
};
