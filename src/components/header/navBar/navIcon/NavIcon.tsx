import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { iconMenu } from "./iconMenu";
import Modal from "../../../modal/Modal";
import st from './NavIcon.module.css';
import { ReactNode, useEffect, useState } from "react";
import { PropsHeader } from "../../Header";
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

const NavIcon = ({ theme, width }: PropsHeader) => {
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

    let content: ReactNode;
    
    content = ((width ? iconMenuWeb : iconMenuMob).map((obj) => {
        if(obj.name === 'profile') {
            return (
                <li 
                    key={obj.name} 
                    className={`${width && stTooltip.liAuth} ${st.iconLi}`}
                    onClick={() => !width && setModal(true)}
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
                                <li><Link to='profile'>profile</Link></li>
                                <li><Link to='favorites'>favorites</Link></li>
                                <li><Line></Line></li>
                            </ul>
                            <button 
                                style={{margin: '20px'}} 
                                onClick={() => {
                                    dispatch(userExit());
                                    (location.pathname === '/profile') && navigate('/', {replace: true});
                                }}

                                >Exit</button>
                        </Tooltip>
                        :
                        <Tooltip nameStyle="Auth">
                            <p>Войдите, чтобы получать скидки по бонусной карте и персональные предложения. После входа вы сможете создать аккаунт юрлица</p>
                            <button className={stTooltip.btnAuth} onClick={() => {setModal(true); setAuth('authUser')}}>Вход или регистрация</button>
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
                    <Theme theme={theme} />
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
                    {auth === 'authUser' ? <AuthUser setModal={setModal} setAuth={setAuth}/> : auth === 'createAuth' && <CreateAuth setModal={setModal} /> }
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