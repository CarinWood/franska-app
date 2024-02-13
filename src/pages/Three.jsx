import "../styles/three.css";
import { ThirdList } from "../data/Third";
import Carousel from "../components/carousel/Carousel";
import Back from "../components/buttons/back/Back";

export const Three = () => {
  return (
    <div className="trois">
      <Back />
      <Carousel flashcardList={ThirdList} />
    </div>
  );
};
