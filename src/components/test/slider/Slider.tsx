import { useState, useEffect, useRef } from "react";
import st from '../style.module.css'; // Подключаем стили

const slides = [
       "/img-test-slider/belka.jpg",
        "/img-test-slider/fox.jpg",
        "/img-test-slider/kroll.jpg",
        "/img-test-slider/leo.jpg",
        "/img-test-slider/rabbit.jpg",
        "/img-test-slider/wolf.jpeg",
]; // Массив изображений

const slides2 = [
     "/img-test-slider/belka.jpg",
      "/img-test-slider/fox.jpg",
      "/img-test-slider/kroll.jpg",
      // "/img-test-slider/leo.jpg",
      // "/img-test-slider/rabbit.jpg",
      // "/img-test-slider/wolf.jpeg",
]; // Массив изображений

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [extendedSlides, setextendedSlides] = useState(slides);
  //const extendedSlides = [...slides, ...slides];
  const slideCount = extendedSlides.length - 1;


  useEffect(() => {
    console.log(currentIndex);
    if(currentIndex <= -slideCount) {
      setextendedSlides(prev => [...prev, ...slides2])
    } 
    console.log(extendedSlides);
    
  }, [currentIndex,]);

  return (
    <div className="slider-container">
         <section className={st.slider}>
                <div ref={sliderRef} className={st.slides} 
                  style={{transform: `translateX(${currentIndex * 100}%)`}}>
                    {extendedSlides.map((obj, i) => <div className={st.slide} key={i}>
                            <img src={obj} alt={obj} />
                        </div> 
                    )}
                </div>
            </section>
      {/* // prev === 0 ? slideCount : prev - 1 */}
      <button onClick={() => setCurrentIndex(prev =>  prev + 1)} className="slider-btn left">
        ❮
      </button>
      <button onClick={() => setCurrentIndex(prev =>  prev - 1)} className="slider-btn right">
        ❯
      </button>
    </div>
  );
}