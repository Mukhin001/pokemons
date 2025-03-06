import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { iconMenu } from "./iconMenu";
import { navMob, navWeb } from "./navBarStyle";
import './style.css';
import Modal from "../modal/Modal";
import { openCloseModal } from "../modal/modalSlice";
import Auth from "../auth/Auth";
import { WrapperModalStyle } from "../modal/modalStyle";

const NavBar = () => {
    const widthSelector = useAppSelector(state => state.widthWindow.width);
    const theme = useAppSelector(state => state.theme.value);
    const modalSelector = useAppSelector(state => state.modal.value);
    const dispatch = useAppDispatch();

    const wrapperModalStyle: WrapperModalStyle = {
        justifyContent: 'center',
        alignItems: 'center', 
    };

    return ( 
        <nav className="wrapperNav">
            {modalSelector && 
                <Modal header="Auth User" wrapperModalStyle={wrapperModalStyle}>
                    <Auth />
                </Modal>
            }
            <ul style={widthSelector ? navWeb : navMob} className="wrapperLi">
                {iconMenu.map(obj => (
                    (obj.name === 'profile') ? 
                    <li onClick={() => dispatch(openCloseModal(true))} key={obj.name}>
                        <img 
                            src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                            alt={obj.name} 
                            className='imgIcon'
                        />
                        <p>{obj.text}</p>
                    </li> 
                    :
                    <li key={obj.name}>
                        <Link to={obj.path}>
                        <img 
                            src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                            alt={obj.name} 
                            className='imgIcon'
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
 
export default NavBar;