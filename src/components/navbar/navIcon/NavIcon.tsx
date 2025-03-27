import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { iconMenu } from "./iconMenu";
import { navMob, navWeb } from "./navIconStyle";
import Modal from "../../modal/Modal";
import { openCloseModal } from "../../modal/modalSlice";
import Auth from "../../auth/Auth";
import { WrapperModalStyle } from "../../modal/modalStyle";
import st from './NavIcon.module.css';
import { ReactNode } from "react";

const NavIcon = () => {
    const widthSelector = useAppSelector(state => state.widthWindow.width);
    const theme = useAppSelector(state => state.theme.value);
    const modalSelector = useAppSelector(state => state.modal.value);
    const dispatch = useAppDispatch();
    const likeCount = useAppSelector(state => state.likeCount.value);

    const wrapperModalStyle: WrapperModalStyle = {
        justifyContent: 'center',
        alignItems: 'center', 
    };

    let content: ReactNode;

    content = (iconMenu.map((obj) => {
        if(obj.name === 'profile') {
            return (
                <li onClick={() => dispatch(openCloseModal(true))} key={obj.name}>
                    <img 
                        src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                        alt={obj.name} 
                        className={st.imgIcon}
                    />
                    <p>{obj.text}</p>
                </li> 
            )
        } else if(obj.name === 'like') {
            return (
                <li key={obj.name} className={st.wrapCountLike}>
                    <Link to={obj.path}>
                        <img 
                            src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                            alt={obj.name} 
                            className={st.imgIcon}
                        />
                        {likeCount !== 0 && <div className={st.countLike}>{likeCount}</div>}
                        <p>{obj.text}</p>
                    </Link>
                </li> 
            )
        } else {
            return (
                <li key={obj.name}>
                    <Link to={obj.path}>
                    <img 
                        src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                        alt={obj.name} 
                        className={st.imgIcon}
                    />
                    <p>{obj.text}</p>
                    </Link>
                </li>
            )
        }
    }))

    return ( 
        <nav className={st.wrapperNav}>
            {modalSelector && 
                <Modal wrapperModalStyle={wrapperModalStyle}>
                    <Auth />
                </Modal>
            }
            <ul 
                style={widthSelector ? navWeb : navMob} 
                className={`${st.wrapperLi} ${theme === 'light' ? st.wrapperLiLight : st.wrapperLiDark}`}
            >
                {content}
            </ul>
        </nav>
     );
};
 
export default NavIcon;