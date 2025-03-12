import { useState } from "react";
import './style.css';

const items = [
    { imgUrl: 'img-test-slider/belka.jpg', alt: 'Slide 1', description: 'Description for Slide 1' },
    { imgUrl: 'img-test-slider/fox.jpg', alt: 'Slide 2', description: 'Description for Slide 2' },
    { imgUrl: 'img-test-slider/kroll.jpg', alt: 'Slide 3', description: 'Description for Slide 3' },
];

const CaruselTest = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
    return ( 
        <section>
             <div className="carousel">
               <button onClick={prevSlide} className="carousel-button">Prev</button>
               <div className="carousel-slide">
                   <img src={items[currentIndex].imgUrl} alt={items[currentIndex].alt} />
                   <p>{items[currentIndex].description}</p>
               </div>
               <button onClick={nextSlide} className="carousel-button">Next</button>
           </div>
        </section>
    )
}
 
export default CaruselTest;