
import { useState } from "react";
import "./InfiniteCarousel.css";

const images: string[] = [
    'img-test-slider/belka.jpg',  
    'img-test-slider/fox.jpg', 
    'img-test-slider/kroll.jpg',  
    'img-test-slider/leo.jpg', 
    'img-test-slider/rabbit.jpg',
    'img-test-slider/wolf.jpeg', 
];

const InfiniteCarousel: React.FC = () => {
    const [transform, setTransform] = useState(0);
    const [countR, setcountR] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
    
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        
    };

    const handleMouseUp = () => {
    };

    const handleScroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, direction: "left" | "right") => {
        if(direction === 'right') {
            
            setcountR(countR + 1);
            const lastEl = images[countR];
            images.push(lastEl);
            console.log(transform);
            //setTransform(prev => prev - 50);
        }
        if(direction === 'left') {
            // setTransform(prev => prev + 50);
            // const firstEl = images.shift();
            // if(firstEl) {
            //     images.push(firstEl)
            // }
        }
    };

  return (
        <div className="carousel-wrapper">

            <div
                className="carouselContainer"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{transform: `translateX(${transform}px)`}}
            >
                {images.map((el, i) => 
                    <div className="wrapImg" key={el.slice(16, -4) + i}
                        >
                        <p>{el.slice(16, -4)}</p>
                        <img src={el} alt={el} />
                    </div>
                )}
            </div>

            <button className="carousel-btn left" onClick={(e) => handleScroll(e, "left")}>
                ◀️
            </button>

            <button className="carousel-btn right" onClick={(e) => handleScroll(e, "right")}>
                ▶️
            </button>
        </div>
    );
};

export default InfiniteCarousel;
