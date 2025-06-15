import { useEffect, useState } from 'react';
import st from './homeSlide.module.css';

const HomeSlide = () => {
    const [slideTranslateX, setSlideTranslateX] = useState<number>(0);

    useEffect(() => {

    }, []);

    const arrSlide: string[] = [
        'pokemon-2.jpg',
        'pokemon-3.jpg',
        'pokemon-4.jpeg',
        'pokemon-5.jpg',
        'pokemon-6.avif',
        'pokemon-7.jpg',
        'pokemon-8.jpg',
        'pokemon-9.webp',
        'pokemon-10.jpg',
    ];

    const slideWidth: number = (arrSlide.length - 1) * 1540;

    const prevSlide = () => {
        setSlideTranslateX(prev => (prev >= 0) ? -slideWidth : prev + 1540);
    };

    const nextSlide = () => {
        setSlideTranslateX(prev => (prev <= -slideWidth) ? 0 : prev - 1540);
    };

    return ( 
        <section>
            <section className={st.containerSlideHome}>
                <div className={st.wrapSlide} style={{transform: `translateX(${slideTranslateX}px)`}}>
                    {arrSlide.map(img => 
                        <div className={st.imgWrapper} key={img}>
                            <img src={`/home-fon/${img}`} alt={img} />
                        </div>
                    )}
                </div>
            </section>
            <section>
                <button onClick={prevSlide}>prev</button>
                <button onClick={nextSlide}>next</button>
            </section>
        </section>
     );
};
 
export default HomeSlide;