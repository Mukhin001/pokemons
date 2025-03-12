import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { iconMenu } from "./iconMenu";
import { navMob, navWeb } from "./navIconStyle";
import Modal from "../../modal/Modal";
import { openCloseModal } from "../../modal/modalSlice";
import Auth from "../../auth/Auth";
import { WrapperModalStyle } from "../../modal/modalStyle";
import st from './NavIcon.module.css';

const NavIcon = () => {
    const widthSelector = useAppSelector(state => state.widthWindow.width);
    const theme = useAppSelector(state => state.theme.value);
    const modalSelector = useAppSelector(state => state.modal.value);
    const dispatch = useAppDispatch();

    const wrapperModalStyle: WrapperModalStyle = {
        justifyContent: 'center',
        alignItems: 'center', 
    };

    return ( 
        <nav className={st.wrapperNav}>
            {modalSelector && 
                <Modal header="Auth User" wrapperModalStyle={wrapperModalStyle}>
                    <Auth />
                </Modal>
            }
            <ul style={widthSelector ? navWeb : navMob} className={st.wrapperLi}>
                {iconMenu.map(obj => (
                    (obj.name === 'profile') ? 
                    <li onClick={() => dispatch(openCloseModal(true))} key={obj.name}>
                        <img 
                            src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                            alt={obj.name} 
                            className={st.imgIcon}
                        />
                        <p>{obj.text}</p>
                    </li> 
                    :
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
                   
                )}
            </ul>
        </nav>
     );
};
 
export default NavIcon;