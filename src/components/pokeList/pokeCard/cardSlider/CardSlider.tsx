import st from './style.module.css';
import './pokecard.css';
import { useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';

interface Props {
    name: string | undefined;
    id: number;
    arrImg: string[];
};

const CardSlider = ({ name, arrImg, id }: Props) => {
    
    const theme = useAppSelector(state => state.theme.value);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handleClickNext = () => {
        setCurrentSlide((prev) => (prev >= arrImg.length -1) ? 0 : prev + 1);

    };
    const handleClickPrev = () => {
        setCurrentSlide((prev) => (prev <= 0) ? arrImg.length -1 : prev - 1);
    };

    const handleClickImg = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        arrImg.forEach((el, i) => {
            if(el === e.currentTarget.src) {
                setCurrentSlide(i);
            }    
        });
    };

    return ( 
        <section className={st.conteinerSlider}>
            
            <h2>{name}</h2>
            <h2>{id}</h2>
            <div className={st.wrapImgMain}>
                <button className={`${st.btnSlide} ${st.btnSlidePrev} ${theme === 'light' ? `${st.btnSlideLight}` : `${st.btnSlideDark}`}`} onClick={handleClickPrev}>{'<'}</button>
                {arrImg.map((el, i) => <img
                    className={(currentSlide === i) ? 'activeSlideMain' : 'hiddenSlideMain'}
                    key={el} src={el} alt='pokemon' />
                )}
                <button className={`${st.btnSlide} ${st.btnSlideNext} ${theme === 'light' ? `${st.btnSlideLight}` : `${st.btnSlideDark}`}`} onClick={handleClickNext}>{'>'}</button>   
            </div>
                
            <div className={st.wrapSlider}>
                {arrImg.map((el, i) => 
                <div 
                    className={`${st.wrapImg} ${(currentSlide === i) ? 'activeSlide' : 'hiddenSlide'}`}
                    key={el}
                >
                    <img src={el} alt='poke' onClick={handleClickImg} />
                </div>
                )}
            </div>
        
        </section>
     );
};
 
export default CardSlider;