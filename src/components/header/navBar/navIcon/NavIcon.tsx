import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { iconMenu } from "./iconMenu";
import Modal from "../../../modal/Modal";
import st from './NavIcon.module.css';
import { ReactNode, useEffect, useState } from "react";
import Drawer from "../../../drawer/Drawer";
import ChildrerDraverMenu from "./childrerDraverMenu/ChildrerDraverMenu";
import Line from "../../../line/Line";
import Theme from "../../theme/Theme";
import SettingDrawer from "./settingDrawer/SettingDrawer";
import Tooltip from "../../../tooltip/Tooltip";
import stTooltip from '../../../tooltip/style.module.css';
import AuthUser from "../../../auth/authUser/AuthUser";
import CreateAuth from "../../../auth/createAuth/CreateAuth";
import { userExit } from "../../../auth/authUserSlice";
import { selectCurrentTheme } from "../../../../utils/themeSlice/themeSlice";
import { selectWidth } from "../../../../utils/widthWindow/widthWindowSlice";
import Btn from "../../../button/Btn";

const NavIcon = () => {
    const theme = useAppSelector(selectCurrentTheme);
    const width = useAppSelector(selectWidth);
    const [modal, setModal] = useState<boolean>(false);
    const [auth, setAuth] = useState<null | string>(null);
    const likeCount = useAppSelector(state => state.favPoke.length);
    const iconMenuWeb = iconMenu.filter(e => e.name !== 'menu' && e.name !== 'setting');
    const iconMenuMob = iconMenu.filter(e => e.name !== 'theme');
    const [showDrawer, setshowDrawer] = useState<boolean>(false);
    const [showDrawerSetting, setshowDrawerSetting] = useState<boolean>(false);
    const user = useAppSelector(state => state.authUser.name);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if(width) {
            setshowDrawer(false);
            setshowDrawerSetting(false);
        }
    }, [width]);

    const handleEnterAuth = () => {
        setModal(true); 
        setAuth('authUser');
    };

    const handleExitAuth = () => {
        setModal(false);
        dispatch(userExit());
        (location.pathname === '/profile') && navigate('/', {replace: true});
    };

    const handleMobClickProfileIcon = () => {
        if(!width) {
            setAuth('authUser');
            setModal(true);  
        }
    };

    let content: ReactNode;
    
    content = ((width ? iconMenuWeb : iconMenuMob).map((obj) => {
        if(obj.name === 'profile') {
            return (
                <li 
                    key={obj.name} 
                    className={`${width && stTooltip.liAuth} ${st.iconLi}`}
                    onClick={handleMobClickProfileIcon}
                >
                    <img 
                        src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                        alt={obj.name} 
                        className={st.imgIcon}
                    />
                    <p className={st.pText}>{user ? user : obj.text}</p>
                    {user ? 
                        <Tooltip nameStyle="Auth">
                            <ul>
                                <li><Link to='profile' onClick={() => setModal(false)}>profile</Link></li>
                                <li><Link to='favorites' onClick={() => setModal(false)}>favorites</Link></li>
                                <li><Line></Line></li>
                            </ul>
                            <Btn content="Exit" onclickFn={handleExitAuth} />
                        </Tooltip>
                        :
                        <Tooltip nameStyle="Auth">
                            <p>Войдите, чтобы получать скидки по бонусной карте и персональные предложения. После входа вы сможете создать аккаунт юрлица</p>
                            <Btn content="Вход или регистрация" onclickFn={handleEnterAuth} />
                        </Tooltip>
                    }
                </li> 
            )
        } else if(obj.name === 'menu') {
            return (
                <li className={st.iconLi} key={obj.name} onClick={() => setshowDrawer(!showDrawer)}>
                    <img 
                        src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                        alt={obj.name} 
                        className={st.imgIcon}
                    />
                    <p className={st.pText}>{obj.text}</p>
                </li> 
            )
        } else if(obj.name === 'like') {
            return (
                <li key={obj.name} className={`${st.wrapCountLike} ${st.iconLi}`}>
                    <Link to={obj.path} className={st.iconLink}>
                        <img 
                            src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                            alt={obj.name} 
                            className={st.imgIcon}
                        />
                        {likeCount !== 0 && <div className={st.countLike}>{likeCount}</div>}
                        <p className={st.pText}>{obj.text}</p>
                    </Link>
                </li> 
            )
        } else if(obj.name === 'theme') {
            return (
                <li key={obj.name} className={`${st.wrapCountLike} ${st.iconLi}`}>
                    <Theme />
                </li> 
            )
        } else if(obj.name === 'setting') {
            return (
                <li key={obj.name} className={`${st.wrapCountLike} ${st.iconLi}`} onClick={() => setshowDrawerSetting(!showDrawerSetting)}>
                    <img 
                        src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                        alt={obj.name} 
                        className={st.imgIcon}
                    />
                    <p className={st.pText}>{obj.text}</p>
                </li> 
            )
        } else {
            return (
                <li key={obj.name} className={st.iconLi}>
                    <Link to={obj.path} className={st.iconLink}>
                    <img 
                        src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                        alt={obj.name} 
                        className={st.imgIcon}
                    />
                    <p className={st.pText}>{obj.text}</p>
                    </Link>
                </li>
            )
        }
    }))

    return ( 
        <nav className={st.wrapperNav}>
            {modal &&
                <Modal header="Auth" setModal={setModal} >
                    {user ? 
                        <div>
                            <ul>
                                <li><Link to='profile' onClick={() => setModal(false)}>profile</Link></li>
                                <li><Link to='favorites' onClick={() => setModal(false)}>favorites</Link></li>
                                <li><Line></Line></li>
                            </ul>
                            <Btn content="Exit" onclickFn={handleExitAuth} />
                        </div>
                        :
                        <div>
                            {auth === 'authUser' ? <AuthUser setModal={setModal} setAuth={setAuth}/> : auth === 'createAuth' && <CreateAuth setModal={setModal} /> }
                        </div>
                    }
                </Modal>
            }
            <Drawer positionProps="left" theme={theme} showDrawer={showDrawer} setshowDrawer={setshowDrawer} >
                <ChildrerDraverMenu setshowDrawer={setshowDrawer} />
            </Drawer>
            <Drawer positionProps="right" theme={theme} showDrawer={showDrawerSetting} setshowDrawer={setshowDrawerSetting} >
                <SettingDrawer theme={theme} setshowDrawerSetting={setshowDrawerSetting} />
            </Drawer>
            <section className={`${width ? null : st.bottomMenuMob}`}>
                {!width && <Line />}
                <ul 
                    className={`
                        ${st.wrapperLi} 
                        ${width ? st.wrapperLiWeb : st.wrapperLiMob}
                        ${theme === 'light' ? st.wrapperLiLight : st.wrapperLiDark}`
                    }
                >
                    {content}
                </ul>
            </section>
        </nav>
     );
};
 
export default NavIcon;