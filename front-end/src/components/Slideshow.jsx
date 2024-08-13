import { useState } from "react";
import PropTypes from "prop-types";
import ArrowNext from "../assets/arrow-circle-left.png";
import ArrowPrev from "../assets/arrow-circle-right.png";
import Button from "./Button";

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container__slide">
      <div className="container__slide__image">
        <img
          src={images[currentSlide].image}
          alt="Slide"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="container__slide__buttons">
        <img
          className="container__slide__buttons__arrow--prev"
          src={ArrowPrev}
          onClick={prevSlide}
        />
        <img
          className="container__slide__buttons__arrow--next"
          src={ArrowNext}
          onClick={nextSlide}
        />
      </div>
      <div className="container__slide__pagination">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
      <div className="container__slide__text">
        <h1>Bienvenue !</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.{" "}
        </p>
        <Button className="button large">En savoir plus</Button>
      </div>
    </div>
  );
};

export default Slideshow;

Slideshow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
