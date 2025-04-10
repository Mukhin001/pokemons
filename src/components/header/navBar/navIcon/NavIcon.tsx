import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { iconMenu } from "./iconMenu";
import Modal from "../../../modal/Modal";
import Auth from "../../../auth/Auth";
import st from './NavIcon.module.css';
import { ReactNode, useEffect, useState } from "react";
import { PropsHeader } from "../../Header";
import Drawer from "../../../drawer/Drawer";
import ChildrerDraverMenu from "./childrerDraverMenu/ChildrerDraverMenu";
import Line from "../../../line/Line";
import Theme from "../../theme/Theme";
import SettingDrawer from "./settingDrawer/SettingDrawer";

const NavIcon = ({ theme, width }: PropsHeader) => {
    const [modal, setModal] = useState<boolean>(false);
    const likeCount = useAppSelector(state => state.favPoke.length);
    const iconMenuWeb = iconMenu.filter(e => e.name !== 'menu' && e.name !== 'setting');
    const iconMenuMob = iconMenu.filter(e => e.name !== 'theme');
    const [showDrawer, setshowDrawer] = useState<boolean>(false);
    const [showDrawerSetting, setshowDrawerSetting] = useState<boolean>(false);

    useEffect(() => {
        if(width) {
            setshowDrawer(false);
        }
    }, [width]);

    let content: ReactNode;
    
    content = ((width ? iconMenuWeb : iconMenuMob).map((obj) => {
        if(obj.name === 'profile') {
            return (
                <li key={obj.name} onClick={() => setModal(true)}>
                    <img 
                        src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                        alt={obj.name} 
                        className={st.imgIcon}
                    />
                    <p>{obj.text}</p>
                </li> 
            )
        } else if(obj.name === 'menu') {
            return (
                <li key={obj.name} onClick={() => setshowDrawer(!showDrawer)}>
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
        } else if(obj.name === 'theme') {
            return (
                <li key={obj.name} className={st.wrapCountLike}>
                    <Theme theme={theme} />
                </li> 
            )
        } else if(obj.name === 'setting') {
            return (
                <li key={obj.name} className={st.wrapCountLike} onClick={() => setshowDrawerSetting(!showDrawerSetting)}>
                    <img 
                        src={obj.url.slice(0, -4) + theme + obj.url.slice(-4)} 
                        alt={obj.name} 
                        className={st.imgIcon}
                    />
                    <p>{obj.text}</p>
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
            {modal && 
                <Modal header="Auth" modal={modal} setModal={setModal} >
                    <Auth />
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