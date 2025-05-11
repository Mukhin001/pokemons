import { useState, useRef } from "react";
import st from '../style.module.css'; // Подключаем стили

const slidesArr = [
    "/img-test-slider/belka.jpg",
    "/img-test-slider/fox.jpg",
    "/img-test-slider/kroll.jpg",
    // "/img-test-slider/leo.jpg",
    // "/img-test-slider/rabbit.jpg",
    // "/img-test-slider/wolf.jpeg",
]; 

export default function Slider() {
    const copiSlide = slidesArr.slice();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [indexSlide, setIndexSlide] = useState(0 );
    const sliderRef = useRef<HTMLDivElement>(null);
    const [slides, setSlides] = useState(copiSlide);

    const handleClickLeft = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCurrentIndex(prev => prev + 1);
        setIndexSlide(prev => prev <= 0 ? copiSlide.length -1 : prev - 1);
        
        setSlides(prev => {
            
            const newSlides = [...prev];
            const lastEl = prev[indexSlide];
            newSlides.unshift(lastEl);
            return newSlides;
        }); 
        console.log(slides);
        
    }
    const handleClickRight = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCurrentIndex(prev => prev - 1);
        setIndexSlide(prev => prev >= copiSlide.length -1 ? 0 : prev + 1);
        setSlides(prev => {
            
            const newSlides = [...prev];
            const lastEl = prev[indexSlide];
            newSlides.push(lastEl);
            return newSlides;
        }); 
    };

    return (
        <div className="slider-container">
            <section className={st.slider}>
                    <div ref={sliderRef} className={st.slides} 
                        // style={{transform: `translateX(${currentIndex * 100}%)`}}
                    >
                        {slides.map((obj, i) => <div className={st.slide} key={i}>
                                <img src={obj} alt={obj} />
                            </div> 
                        )}
                    </div>
                </section>

        <button onClick={handleClickLeft} className="slider-btn left">
            ❮
        </button>
        <button onClick={handleClickRight} className="slider-btn right">
            ❯
        </button>
        </div>
    );
};