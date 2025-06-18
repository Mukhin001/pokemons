import { useState, useEffect, useRef } from "react";
import st from './style.module.css';
import { useAppSelector } from "../../app/hooks";
import { selectWidth } from "../../utils/widthWindow/widthWindowSlice";
import HomeSlide from "./homeSlide/HomeSlide";

const Home = () => {
    const imgWrapper = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState<number>(1);
    const [borderRadius, setBorderRadius] = useState<number>(0);
    const windowWidth = useAppSelector(selectWidth);
    const [stateWidth, setStateWidth] = useState<number>(0);
    
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (!imgWrapper.current) return;

                    const rect = imgWrapper.current.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    const triggerPoint = windowHeight * (windowWidth ? 0.1 : 0.2);
                    const maxScroll = windowHeight * 1.5;

                    if (rect.top <= triggerPoint) {
                        const progress = Math.min(Math.abs(rect.top - triggerPoint) / maxScroll, 1);
                        const newScale = 1 - progress * 0.9;
                        const newBorderRadius = progress * 50;

                        setScale(newScale);
                        setBorderRadius(newBorderRadius);
                    } else {
                        setScale(1);
                        setBorderRadius(0);
                    }

                    ticking = false;
                });

                ticking = true;
            }
        };
        
        // Добавляем обработчик скролла
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Убираем обработчик при размонтировании компонента
    }, []);

    useEffect(() => {
        if(imgWrapper.current) setStateWidth(imgWrapper.current.clientWidth);
        
        const handleResize = () => {
           if(imgWrapper.current) setStateWidth(imgWrapper.current.clientWidth);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section>
            <HomeSlide stateWidth={stateWidth}/>

            <div className={st.imgWrapper}
                ref={imgWrapper}
            >
                <img
                    src="/home-fon/pokemon-7.jpg"
                    alt="Scroll Shrink"
                    style={{transform: `scale(${scale})`, borderRadius: `${borderRadius}px`,}}
                />
            </div>
            <div className={st.divH}></div>
        </section>
    );
};
 
export default Home;