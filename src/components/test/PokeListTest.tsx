import { useRef, useState } from 'react';
import st from './style.module.css';
import Slider from './slider/Slider';

const items = [
    { imgUrl: 'img-test-slider/belka.jpg', alt: 'Slide 1', description: 'Description for Slide 1' },
    { imgUrl: 'img-test-slider/fox.jpg', alt: 'Slide 2', description: 'Description for Slide 2' },
    { imgUrl: 'img-test-slider/kroll.jpg', alt: 'Slide 3', description: 'Description for Slide 3' },
];

const PokeListTest = () => {
    const [currentIndex, setcurrentIndex] = useState<number>(0);
    const wrapDivRef = useRef(null);
    const extendedSlides = [...items, ...items];
    const slideCount = extendedSlides.length - 1;

    // useEffect(() => {
        
    //     if(currentIndex >= slideCount) {
    //         if(wrapDivRef.current) {
    //             wrapDivRef.current?.style.transition = 'none';
    //         }
    //     }
    // },[currentIndex])

    const nextClick = () => { 
        setcurrentIndex(prev => prev === slideCount ? 0 : prev + 1 );
       // console.log(currentIndex);
        
    };
    const prevClick = () => {
        setcurrentIndex(prev => prev === 0 ? slideCount : prev - 1);
    };

    // const nextClick = () => { 
    //     setcurrentIndex(prev => prev === slideCount - 1 ? 0 : prev + 1 );
    // };
    // const prevClick = () => {
    //     setcurrentIndex(prev => prev === 0 ? slideCount - 1 : prev - 1);
    // };

    return ( 
        <section>
           <div>
            <Slider />
           </div>
            <section className={st.slider}>
                <div ref={wrapDivRef} className={st.slides} style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                    {extendedSlides.map((obj, i) => 
                        <div className={st.slide} key={i}>
                            <img src={obj.imgUrl} alt={obj.alt} />
                        </div>
                    )}
                    {/* <div className={st.slide}><img src="/img-test-slider/belka.jpg" alt="" /></div>
                    <div className={st.slide}><img src="/img-test-slider/fox.jpg" alt="" /></div>
                    <div className={st.slide}><img src="/img-test-slider/kroll.jpg" alt="" /></div>
                    <div className={st.slide}><img src="/img-test-slider/leo.jpg" alt="" /></div>
                    <div className={st.slide}><img src="/img-test-slider/rabbit.jpg" alt="" /></div>
                    <div className={st.slide}><img src="/img-test-slider/wolf.jpeg" alt="" /></div> */}
                </div>
            </section>

            <div className={st.controls}>
                <span onClick={prevClick} className={st.prev}>Prev</span>
                <span onClick={nextClick} className={st.next}>Next</span>
            </div>
           
        </section>
     );
};
 
export default PokeListTest;

// /icons_menu/home_.svg
// onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
// onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}