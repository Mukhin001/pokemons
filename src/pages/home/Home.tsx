import { useState, useEffect, useRef } from "react";
import st from './style.module.css';
import { useAppSelector } from "../../app/hooks";
import { selectWidth } from "../../utils/widthWindow/widthWindowSlice";
import Slide from "../../components/slide/Slide";

const Home = () => {
    const imgWrapper = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState<number>(1);
    const [borderRadius, setBorderRadius] = useState<number>(0);
    const windowWidth = useAppSelector(selectWidth);
    
    useEffect(() => {
        const handleScroll = () => {
            if (!imgWrapper.current) return;

            const rect = imgWrapper.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const triggerPoint = windowHeight * (windowWidth ? 0.1 : 0.2); // Начинаем, когда картинка на 10% экрана сверху
            const maxScroll = windowHeight * 1.5;  // Длина уменьшения
            
            if(rect.top <= triggerPoint) {
                const progress = Math.min(Math.abs(rect.top - triggerPoint) / maxScroll, 1);
                // 📌 Формулы уменьшения:
                const newScale = 1 - progress * 0.9; // Уменьшение до 70%
                const newBorderRadius = progress * 50; // Увеличение до 50px
                
                setScale(newScale);
                setBorderRadius(newBorderRadius);
            } else {
                // Сбрасываем при скролле вверх
                setScale(1);
                setBorderRadius(0);
            }
      
        };

        // Добавляем обработчик скролла
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Убираем обработчик при размонтировании компонента
    }, []);

    return (
        <section>
            {/* <Slide /> */}
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