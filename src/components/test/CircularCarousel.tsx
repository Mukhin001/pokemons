import React, { useState } from 'react';
import './styleCircular.css'; // CSS for styling

const items = [
    { imgUrl: 'img-test-slider/belka.jpg', alt: 'Slide 1', description: 'Description for Slide 1' },
    { imgUrl: 'img-test-slider/fox.jpg', alt: 'Slide 2', description: 'Description for Slide 2' },
    { imgUrl: 'img-test-slider/kroll.jpg', alt: 'Slide 3', description: 'Description for Slide 3' },
];

const CircularCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel-container">
            <div 
                className="carousel-wrapper" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={item.imgUrl} alt={item.alt} />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="carousel-button">Prev</button>
            <button onClick={nextSlide} className="carousel-button">Next</button>
        </div>
    );
};

export default CircularCarousel;