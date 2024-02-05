import "../styles/trois.css";
import { ThirdList } from "../data/Third";
import Carousel from "../components/carousel/Carousel";

export const Trois = () => {
  return (
    <div className="trois">
      <Carousel flashcardList={ThirdList} />
    </div>
  );
};
