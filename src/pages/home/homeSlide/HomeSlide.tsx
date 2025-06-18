import { useEffect, useState } from 'react';
import st from './homeSlide.module.css';
import { useAppSelector } from '../../../app/hooks';
import { selectWidth } from '../../../utils/widthWindow/widthWindowSlice';

interface Props {
    stateWidth: number;
};

const HomeSlide = ({ stateWidth }: Props) => {
    const [slideTranslateX, setSlideTranslateX] = useState<number>(0);
    const [indexSlide, setIndexSlide] = useState<number>(0);
    const widthWindow = useAppSelector(selectWidth);
    /// slide 
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
    // slide
    useEffect(() => {
        setSlideTranslateX(0);
        setIndexSlide(0);
    }, [stateWidth]);

    const touchdownFn = (e: React.TouchEvent<HTMLDivElement>) => {
        const shiftX = e.touches[0].clientX;
        let moveSlide = 0;
        const initialTranslateX = slideTranslateX;
        const wrapSlide = e.currentTarget;

        wrapSlide.style.transition = 'none';
    
        const touchMoveFn = (moveEvent: TouchEvent) => {
            moveSlide = moveEvent.touches[0].pageX - shiftX;            
            setSlideTranslateX(initialTranslateX + moveSlide)
        };

        const touchUpFn = () => {  
            wrapSlide.style.transition = 'transform .7s ease-in-out';
            
            if(moveSlide < 50 && moveSlide > -50) {
                setSlideTranslateX(initialTranslateX);
                document.removeEventListener('touchmove' , touchMoveFn);
                document.removeEventListener('touchend' , touchUpFn);
                return;
            }
            setSlideTranslateX(prev => (moveSlide >= 0) ? 
                (prev >= 0) ? 0 : prev + stateWidth - moveSlide
                : 
                (prev <= -slideWidth) ? -slideWidth : prev - stateWidth - moveSlide
            );

            setIndexSlide((moveSlide >= 0) ?
                (indexSlide <= 0) ? 0 : indexSlide -1
                :
                (indexSlide >= arrSlide.length - 1) ? arrSlide.length -1 : indexSlide + 1
            );
            document.removeEventListener('touchmove' , touchMoveFn);
            document.removeEventListener('touchend' , touchUpFn);
        };
                
        document.addEventListener('touchmove' , touchMoveFn);
        document.addEventListener('touchend' , touchUpFn);
    };

    const mousedownFn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const shiftX = e.clientX;
        let moveSlide = 0;
        const initialTranslateX = slideTranslateX;
        const wrapSlide = e.currentTarget;

        wrapSlide.style.transition = 'none';
    
        const mouseMoveFn = (moveEvent: MouseEvent) => {
            moveSlide = moveEvent.pageX - shiftX;            
            setSlideTranslateX(initialTranslateX + moveSlide)
        };

        const mouseUpFn = () => {  
            wrapSlide.style.transition = 'transform .7s ease-in-out';
            
            if(moveSlide < 50 && moveSlide > -50) {
                setSlideTranslateX(initialTranslateX);
                document.removeEventListener('mousemove' , mouseMoveFn);
                document.removeEventListener('mouseup' , mouseUpFn);
                return;
            }
            setSlideTranslateX(prev => (moveSlide >= 0) ? 
                (prev >= 0) ? 0 : prev + stateWidth - moveSlide
                : 
                (prev <= -slideWidth) ? -slideWidth : prev - stateWidth - moveSlide
            );

            setIndexSlide((moveSlide >= 0) ?
                (indexSlide <= 0) ? 0 : indexSlide -1
                :
                (indexSlide >= arrSlide.length - 1) ? arrSlide.length -1 : indexSlide + 1
            );
            document.removeEventListener('mousemove' , mouseMoveFn);
            document.removeEventListener('mouseup' , mouseUpFn);
        };
                
        document.addEventListener('mousemove' , mouseMoveFn);
        document.addEventListener('mouseup' , mouseUpFn);
    };

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
           setSlideTranslateX(-stateWidth * indexData)
        }
    };

    return ( 
        <section>
            <section className={st.containerSlideHome} style={{height: stateWidth / 2 + 'px'}}>
                <div 
                    className={st.wrapSlide}  
                    onMouseDown={mousedownFn} onTouchStart={touchdownFn}
                    style={{transform: `translateX(${slideTranslateX}px)`}}
                    >
                    {arrSlide.map(img => 
                        <div className={st.imgWrapper} key={img} style={stateWidth ? {width: stateWidth + 'px'} : {}}>
                            <img src={`/home-fon/${img}`} alt={img} draggable={false}/>
                        </div>
                    )}
                </div>

                {widthWindow && 
                    <section className={st.wrapBtnSlideHome}>
                         <div className={st.wrapArrow} onClick={nextSlide}>
                            <img src="arrow/arrow-right-grey.svg" alt="" />
                        </div>
                        <div className={st.wrapArrow} onClick={prevSlide}>
                            <img src="arrow/arrow-left-grey.svg" alt="" />
                        </div>
                    </section>
                }

                <section className={st.toodsSlide}>
                    {arrSlide.map((img, i) => 
                        <div key={img} 
                            className={`${st.todSlide} ${i === indexSlide && st.todSlideActive}
                             ${indexSlide > i + 1 && st.todEnd} ${indexSlide < i - 1 && st.todEnd}`}
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