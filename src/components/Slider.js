import { useEffect } from "react";

function Slider() {
  const slides = document.getElementsByClassName("carousel-item");
  // slides is empty on first render

  //   const position = useState()

  let slidePosition = 0;

  const hideAllSlides = () => {
    for (let slide of slides) {
      slide.classList.remove("carousel-item-visible");
      slide.classList.add("carousel-item-hidden");
    }
  };

  const moveToNextSlide = () => {
    hideAllSlides();

    slidePosition === slides.length - 1 ? (slidePosition = 0) : slidePosition++;

    slides[slidePosition].classList.add("carousel-item-visible");
    setTimeout(moveToNextSlide, 2000)
  };

  const moveToPrevSlide = () => {
    hideAllSlides();

    slidePosition === 0 ? (slidePosition = slides.length - 1) : slidePosition--;

    slides[slidePosition].classList.add("carousel-item-visible");
    setTimeout(moveToPrevSlide, 2000)
  };

  useEffect(() => {
    const timeout = () => {setTimeout(moveToNextSlide, 1000)}

    //   return () => {
    //     clearTimeout(timeout)
    //   }
    return timeout;
  }, [slidePosition]);

//   setTimeout(moveToNextSlide, 1000);

  return (
    <div className="carousel">
      <div className="carousel-item carousel-item-visible">
        <img src="img/food1.jpg" />
      </div>
      <div className="carousel-item">
        <img src="img/food2.jpg" />
      </div>
      <div className="carousel-item">
        <img src="img/food3.jpg" />
      </div>
      <div className="carousel-item">
        <img src="img/food4.jpg" />
      </div>
      <div className="carousel-item">
        <img src="img/food5.jpg" />
      </div>
      <div className="carousel-item">
        <img src="img/food6.jpg" />
      </div>

      <div className="carousel-actions">
        <button
          id="carousel-button-prev"
          aria-label="Previous Slide"
          onClick={moveToPrevSlide}
        >
          &lt;
        </button>

        <button
          id="carousel-button-next"
          aria-label="Next Slide"
          onClick={moveToNextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;
