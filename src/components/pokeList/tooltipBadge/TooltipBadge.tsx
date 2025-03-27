import Tooltip from "../../tooltip/Tooltip";
import st from './style.module.css';
import style from '../style.module.css';
import keyFrame from './keyframe.module.css';
import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { decrementLike, incrementLike } from "../likeCountSlice";

interface Props {
    name: string;
    description?: string;
    alt?: string;
};

const TooltipBadge = ({ name, description, alt }: Props) => {
    const [heart, setHeart] = useState<boolean>(false);
    const dispatch = useAppDispatch();
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
        setHeart(!heart);
        
        const firstDiv = e.currentTarget.firstChild as HTMLDivElement;
        //console.log(e.currentTarget.parentNode?.parentNode);
        
        if(firstDiv.getAttribute('data-name') === 'wrapLikeImgGrey') {
            dispatch(incrementLike());
        } else {
            dispatch(decrementLike());
        }
    };

    return ( 
        <div className={st.wrapTooltip}>
                <Tooltip name={name}>
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>{alt}</p>
                </Tooltip>
                <span 
                    onMouseEnter={(e) => mouseEnter(e, name)}
                    onMouseLeave={(e) => mouseLeave(e, name)}
                    >tooltip
                </span>
                <div onClick={handleClickHeart} className={`${st.wrapLike} ${style.wrapLike}`}>
                    {!heart && 
                        <div data-name='wrapLikeImgGrey' className={`${st.wrapLikeImgGrey} ${style.wrapLikeImgGrey}`}>
                            <img src='/icon_btn/like_grey.svg' alt="" />
                        </div>
                    }
                    {heart && <div className={st.circle}></div>}
                    {heart && 
                        <div className={st.wrapLikePink}>
                           <div className={st.wrapLikeImgPink}> <img src='/icon_btn/like_pink.svg' alt="" /></div>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div className={keyFrame.ray} key={i}
                                    
                                ></div>
                            ))}
                        </div>
                    }
                </div>
            </div>
     );
};
 
export default TooltipBadge;