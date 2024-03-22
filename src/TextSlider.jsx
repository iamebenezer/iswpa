// TextSlider.js
import React, { useState } from 'react';
import { FiChevronsRight } from "react-icons/fi";
const TextSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-800 focus:outline-none"
          onClick={goToPrevSlide}
        >
          Prev
        </button> */}
      </div>
      <div className="flex justify-center items-center h-32 p-4">
        <p className="text-xl text-center font-texts font-bold" dangerouslySetInnerHTML={{ __html: slides[currentSlide] }}></p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100/90 px-3 py-1 rounded-full text-sm text-gray-800 focus:outline-none"
          onClick={goToNextSlide}
        >
          <FiChevronsRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TextSlider;
