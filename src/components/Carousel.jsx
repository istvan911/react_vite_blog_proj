import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Automatikus váltás 4 másodpercenként
    return () => clearInterval(interval); // Cleanup az unmounting során
  }, []);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img className='carousel-img' src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};
 export default Carousel;