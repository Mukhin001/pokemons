import Tooltip from "../../tooltip/Tooltip";
import st from './style.module.css';
import style from '../style.module.css';
import keyFrame from './keyframe.module.css';
import { useAppDispatch } from "../../../app/hooks";
import { addPokeFav } from "../../../pages/favorites/favPokeSlice/favPokeSlice";

interface Props {
    name: string;
    description?: string;
    alt?: string;
    pokeFav: string | null;
};

const TooltipBadge = ({ name, description, alt, pokeFav }: Props) => {
    const dispatch = useAppDispatch();
    console.log(description);
    
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

    const handleClickHeart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(e.currentTarget.dataset.pokename) dispatch(addPokeFav(e.currentTarget.dataset.pokename));
    };

    return ( 
        <div className={st.wrapTooltip}>
                <Tooltip name={name} nameStyle="PokeCard">
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>{alt}</p>
                </Tooltip>
                <span 
                    onMouseEnter={(e) => mouseEnter(e, name)}
                    onMouseLeave={(e) => mouseLeave(e, name)}
                    >tooltip
                </span>
                <div onClick={handleClickHeart} data-pokename={name} className={`${st.wrapLike} ${style.wrapLike}`}>
                    {!pokeFav && 
                        <div data-name='wrapLikeImgGrey' className={`${st.wrapLikeImgGrey} ${style.wrapLikeImgGrey}`}>
                            <img src='/icon_btn/like_grey.svg' alt="" />
                        </div>
                    }
                    {pokeFav && <div className={st.circle}></div>}
                    {pokeFav && 
                        <div className={st.wrapLikePink}>
                           <div className={st.wrapLikeImgPink}> <img src='/icon_btn/like_pink.svg' alt="" /></div>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div className={keyFrame.ray} key={i}></div>
                            ))}
                        </div>
                    }
                </div>
            </div>
     );
};
 
export default TooltipBadge;