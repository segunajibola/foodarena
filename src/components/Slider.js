function Slider() {
    const slides = document.getElementsByClassName('carousel-item');
    let slidePosition = 0;
    const totalSlides = slides.length;
    const next = document.getElementById('carousel-button-next')
    const prev = document.getElementById('carousel-button-prev')

    next.addEventListener('click', moveToNextSlide);

    prev.addEventListener('click', moveToPrevSlide);

    const hideAllSlides = () => {
        for (let slide of slides) {
            slide.classList.remove('carousel-item-visible');
            slide.classList.add('carousel-item-hidden');
        }
    }

    const moveToNextSlide = () => {
        hideAllSlides();
        slidePosition === totalSlides - 1 ? slidePosition = 0 : slidePosition++

        slides[slidePosition].classList.add("carousel-item-visible");
    }

    const moveToPrevSlide = () => {
        hideAllSlides();
        slidePosition === 0? slidePosition = totalSlides - 1 : slidePosition--

        slides[slidePosition].classList.add("carousel-item-visible");
    }

    return(
        <div className="carousel">
            <div className="carousel-item carousel-item-visible">
                <img src="img/1.jpg" />
            </div>
            <div className="carousel-item">
                <img src="img/2.jpg" />
            </div>
            <div className="carousel-item">
                <img src="img/3.jpg" />
            </div>
            
            <div className="carousel-actions">
                <button id="carousel-button-prev" aria-label="Previous Slide">&lt;</button>
                <button id="carousel-button-next" aria-label="Next Slide">&gt;</button>
            </div>
        </div>
    )
}

export default Slider;