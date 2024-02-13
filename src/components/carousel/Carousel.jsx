import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";
import "@splidejs/splide/css";
import { Card } from "../card/Card";
import "./carousel.css";

const Carousel = ({ flashcardList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (splide, newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <div className="carousel">
      <div className="slide-indicator">
        {currentSlide + 1} / {flashcardList.length}
      </div>

      <Splide
        className="splide"
        options={{ perPage: 1, pagination: false }}
        onMoved={handleSlideChange}
      >
        {flashcardList.map((item) => (
          <SplideSlide key={item.id}>
            <Card sv={item.sv} fr={item.fr} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

Carousel.propTypes = {
  flashcardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sv: PropTypes.string.isRequired,
      fr: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
