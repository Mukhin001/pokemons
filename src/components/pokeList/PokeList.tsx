import { ReactNode, useEffect, useRef, useState } from "react";
import st from './style.module.css';
import { Link } from "react-router-dom";
import Tooltip from "../tooltip/Tooltip";
import { useAppSelector } from "../../app/hooks";
import { pokeListWrapperDark, pokeListWrapperLight } from "./pokeListStyle";

export const items = [
    { id: 1, name: 'belka', imgUrl: 'img-test-slider/belka.jpg', alt: 'Slide 1', description: 'Description for Slide 1' },
    { id: 2, name: 'fox', imgUrl: 'img-test-slider/fox.jpg', alt: 'Slide 2', description: 'Description for Slide 2' },
    { id: 3, name: 'kroll', imgUrl: 'img-test-slider/kroll.jpg', alt: 'Slide 3', description: 'Description for Slide 3' },
    { id: 4, name: 'leo', imgUrl: 'img-test-slider/leo.jpg', alt: 'Slide 4', description: 'Description for Slide 4' },
    { id: 5, name: 'rabbit', imgUrl: 'img-test-slider/rabbit.jpg', alt: 'Slide 5', description: 'Description for Slide 5' },
    { id: 6, name: 'wolf', imgUrl: 'img-test-slider/wolf.jpeg', alt: 'Slide 6', description: 'Description for Slide 6' },
];


const PokeList = () => {
    const theme = useAppSelector(state => state.theme.value);
    const refContainerPoke = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(([entry]) => {
    //         setIsVisible(entry.isIntersecting);
    //     }, { threshold: 0.3 }) // контент появится когда 30% блока будет видно

    //     if(refContainerPoke.current) {
    //         observer.observe(refContainerPoke.current);
    //     }

    //     return () => {
    //         if(refContainerPoke.current) observer.unobserve(refContainerPoke.current);
    //     }
    // }, []);

    const mouseEnterWrapper = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | any): void => {
        (theme === 'dark') ? e.currentTarget.style = pokeListWrapperDark : e.currentTarget.style = pokeListWrapperLight;
    };

    const mouseLeaveWrapper = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | any): void => {
       // (theme === '') ? e.currentTarget.style = pokeListWrapperDark : e.currentTarget.style = pokeListWrapperLight;
    };

    const mouseEnter = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | any, name: string): void => {
        const tooltip = e.currentTarget.previousElementSibling;
        if(tooltip.dataset.name === name) {
            tooltip.style.opacity = '1';
        }
    };

    const mouseLeave = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | any, name: string): void => {
        const tooltip = e.currentTarget.previousElementSibling;
        if(tooltip.dataset.name === name) {
            tooltip.style.opacity = '0';
        }
    };

    const content:ReactNode = (items.map(obj => 
        <div 
            key={obj.alt} 
            className={st.pokeListWrapper}
            onMouseEnter={mouseEnterWrapper}
            onMouseLeave={mouseLeaveWrapper}
            >
            <div className={st.wrapTooltip}>
                <Tooltip name={obj.name}>
                    <p>{obj.name}</p>
                    <p>{obj.description}</p>
                    <p>{obj.alt}</p>
                </Tooltip>
                <span 
                    onMouseEnter={(e) => mouseEnter(e, obj.name)}
                    onMouseLeave={(e) => mouseLeave(e, obj.name)}
                    >tooltip
                </span>
                <button className={st.cardLikeBtn}>like</button>
            </div>

            <div>
                <div className={st.wrapImg}>
                    <Link to={obj.name}><img src={obj.imgUrl} alt={obj.alt} /></Link>
                </div>
                <p>{obj.id}</p>
                <p>{obj.name}</p>
                <p>{obj.alt}</p>
                <p>{obj.description}</p>
            </div>
        </div>
    )); 

    return ( 
        <main>
            {/* <div className={st.emptyVhDiv}></div> */}
            <section>
                <div>filtr</div>
                <div>
                    <div>cards</div>
                    <div>choise</div>
                </div>
            </section>
            <section 
                ref={refContainerPoke} 
                className={st.containerPoke}
                //className={`${st.containerPoke} , ${isVisible ? st.visible : ''}`}
            >
                {content}
            </section>
        </main>
     );
};
 
export default PokeList;