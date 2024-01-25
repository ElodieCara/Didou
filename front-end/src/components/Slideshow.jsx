import { useState, useEffect } from "react";
import { slide } from "../data/home.js";
import ArrowNext from "../assets/arrow-circle-left.svg";
import ArrowPrev from "../assets/arrow-circle-right.svg";

const Slideshow = () => {
  const [slides, setSlides] = useState([]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideArrayLength = slides.length;

  useEffect(() => {
    setSlides(slide);
  }, []);

  // paramétre notre composant pour qu'il gère le déroulement des slides
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideArrayLength - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slideArrayLength - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className="container__slide">
      {slideArrayLength > 1 && (
        <img
          className="container__slide__arrow--prev"
          src={ArrowNext}
          alt="flèche photos suivante"
          onClick={nextSlide}
        />
      )}
      {slideArrayLength > 1 && (
        <img
          className="container__slide__arrow--next"
          src={ArrowPrev}
          alt="flèche photos précédente"
          onClick={prevSlide}
        />
      )}
      <div className="container__slide__image">
        <img src={slides[currentSlide].pictures} alt="photos" />
      </div>
      <span
        style={
          slideArrayLength > 1 ? { display: "block" } : { display: "none" }
        }
        className="container__slide__number"
      >
        {currentSlide + 1}/{slideArrayLength}
      </span>
    </div>
  );
};

// Slideshow.propTypes = {
//   images: PropTypes.array.isRequired,
// };
export default Slideshow;
