import { useEffect, useState } from 'react';
import st from './homeSlide.module.css';

interface Props {
    stateWidth: number;
};

const HomeSlide = ({ stateWidth }: Props) => {
    const [slideTranslateX, setSlideTranslateX] = useState<number>(0);
    const [indexSlide, setIndexSlide] = useState<number>(0);

    useEffect(() => {
        setSlideTranslateX(0);
    }, [stateWidth])
    
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
    
    const slideWidth: number = (arrSlide.length - 1) * stateWidth;

    const prevSlide = () => {
        setSlideTranslateX(prev => (prev >= 0) ? -slideWidth : prev + stateWidth);
        setIndexSlide((indexSlide <= 0) ? arrSlide.length -1 : indexSlide -1);
    };

    const nextSlide = () => {
        setSlideTranslateX(prev => (prev <= -slideWidth) ? 0 : prev - stateWidth);
        setIndexSlide((indexSlide >= arrSlide.length - 1) ? 0 : indexSlide + 1);
    };

    const todsClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const indexData: number | undefined = e.currentTarget.dataset.index ? +e.currentTarget.dataset.index : undefined;
        if(typeof indexData === 'number') {
            setIndexSlide(indexData);
            console.log(-stateWidth * indexData);
            console.log(slideTranslateX);
            
           setSlideTranslateX(-stateWidth * indexData)
        }
    };

    return ( 
        <section>
            <section className={st.containerSlideHome} style={{height: stateWidth / 2 + 100 + 'px'}}>

                <div className={st.wrapSlide} style={{transform: `translateX(${slideTranslateX}px)`}}>
                    {arrSlide.map(img => 
                        <div className={st.imgWrapper} key={img} style={stateWidth ? {width: stateWidth + 'px'} : {}}>
                            <img src={`/home-fon/${img}`} alt={img} />
                        </div>
                    )}
                </div>

                <section className={st.wrapBtnSlideHome}>
                    <div className={st.wrapArrow} onClick={prevSlide}>
                        <img src="arrow/next-grey.svg" alt="" />
                    </div>
                    <div className={st.wrapArrow} onClick={nextSlide}>
                        <img src="arrow/next-grey.svg" alt="" />
                    </div>
                </section>

                <section className={st.toodsSlide}>
                    {arrSlide.map((img, i) => 
                        <div key={img} 
                            className={`${st.todSlide} ${i === indexSlide && st.todSlideActive}`}
                            data-index={i}
                            onClick={todsClick}
                        >
                        </div>
                    )}
                </section>

            </section>
        </section>
     );
};
 
export default HomeSlide;