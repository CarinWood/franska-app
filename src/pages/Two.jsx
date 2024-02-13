import Back from "../components/buttons/back/Back";
import Carousel from "../components/carousel/Carousel";
import "../styles/two.css";
import { SecondList } from "../data/Second";

export const Two = () => {
  return (
    <div className="container">
      <Back />
      <Carousel flashcardList={SecondList} />
    </div>
  );
};
