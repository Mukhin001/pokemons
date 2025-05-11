import { useState } from 'react';
import st from './slide.module.css';

const slides = [
    { id: 1, src: '/img-test-slider/belka.jpg' },
    { id: 2, src: '/img-test-slider/fox.jpg' },
    { id: 3, src: '/img-test-slider/kroll.jpg' },
    { id: 4, src: '/img-test-slider/leo.jpg' },
];

export const items = [
    { id: 1, name: 'belka', imgUrl: 'img-test-slider/belka.jpg', alt: 'Slide 1', description: 'Description for Slide 1' },
    { id: 2, name: 'fox', imgUrl: 'img-test-slider/fox.jpg', alt: 'Slide 2', description: 'Description for Slide 2' },
    { id: 3, name: 'kroll', imgUrl: 'img-test-slider/kroll.jpg', alt: 'Slide 3', description: 'Description for Slide 3' },
    { id: 4, name: 'leo', imgUrl: 'img-test-slider/leo.jpg', alt: 'Slide 4', description: 'Description for Slide 4' },
    { id: 5, name: 'rabbit', imgUrl: 'img-test-slider/rabbit.jpg', alt: 'Slide 5', description: 'Description for Slide 5' },
    { id: 6, name: 'wolf', imgUrl: 'img-test-slider/wolf.jpeg', alt: 'Slide 6', description: 'Description for Slide 6' },
];


const Slide = () => {
    const [translateMain, settranslateMain] = useState(0);
    const maxTranslate = (slides.length -1) * -400;
    const [activeSlide, setActiveSlide] = useState(0);

    
    const shiftLeft = () => {
        setActiveSlide(prev => (prev <= 0) ? slides.length -1 : prev - 1);
        settranslateMain(prev => (prev >= 0) ? maxTranslate : prev - -400);
    };


    const shiftRight = () => {
        setActiveSlide(prev => (prev >= slides.length -1) ? 0 : prev + 1);
        settranslateMain(prev => (prev <= maxTranslate) ? 0 : prev - 400);
    };

    const handleClickSlideImg = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        if(e.currentTarget.dataset.imgid) {
            const imgId: number = +e.currentTarget.dataset.imgid -1;
            setActiveSlide(imgId);
            settranslateMain(-imgId * 400);
        };
        
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        //console.log(e.currentTarget);
        
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        //console.log(e);
        
    };

    return (
        <section className={st.containerSlide}>
            <h1>Slider</h1>
            <div className={st.wrapUlMain}>
                <ul
                    className={st.wrapLiMain}
                    style={{
                        transform: `translate3d(${translateMain}px, 0, 0)`,
                    }}
                    >
                    {slides.map(slide => (
                        <li key={slide.id} className={st.wrapImgMain}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                            <img src={slide.src} alt="slide" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={st.wrapUl}>
                <ul
                    className={st.wrapLi}
                    >
                    {slides.map((slide, i) => (
                        <li key={slide.id} 
                            data-imgid={slide.id}
                            onClick={handleClickSlideImg}
                            className={`${st.wrapImg} ${activeSlide === i && st.activeSlide}`}>
                            <img src={slide.src} alt="slide" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={st.wrapBtns}>
                <button onClick={shiftLeft}>left</button>
                <button onClick={shiftRight}>right</button>
            </div>
        </section>
    );
};

export default Slide;