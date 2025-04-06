import { useState } from "react";
import st from './style.module.css';
import NavTitle from "./navTitle/NavTitle";
import NavLine from "./navLine/NavLine";
import ContentPoke from "./contentPoke/ContentPoke";
import Line from "../../../line/Line";

interface SubMenuWrapStyle {
    transform: string;
    opacity: number | string;
    pointerEvents: any;
};


const NavMenu = () => {
    const [stripWidth, setStripWidth] = useState<string>('40px');
    const [stripLeft, setStripLeft] = useState<string>('0');
    const [nameTitle, setNameTitle] = useState<string | null>(null);
    const [strip, setStrip] = useState<boolean | undefined>(false);
    const [timeoutId, setTimeoutid] = useState<number | null>(null);

    const subMenuWrapActive: SubMenuWrapStyle = {
        transform: 'translateY(0)',
        opacity: '1',
        pointerEvents: 'auto',
    };

    const subMenuWrapHidden: SubMenuWrapStyle = {
        transform: 'translateY(-10px)',
        opacity: '0',
        pointerEvents: 'none',
    };
    
    const handleMouseEnterMain = () => {
        const timeOut = setTimeout(() => {
            setStrip(true);
        }, 200);
        setTimeoutid(timeOut);
    };

    const handleMouseLeaveMain = () => {
        setStripLeft('-10%');
        setStripWidth('40px');
        setStrip(false);
        if(timeoutId) clearTimeout(timeoutId);
    };

    return ( 
        <section>
            <section className={st.wrapperMenu}
                onMouseEnter={handleMouseEnterMain}
                onMouseLeave={handleMouseLeaveMain} 
            >

                <Line />

                <NavTitle setNameTitle={setNameTitle} setStrip={setStrip} setStripLeft={setStripLeft} setStripWidth={setStripWidth} />

                <NavLine stripWidth={stripWidth} stripLeft={stripLeft} strip={strip} />

                <div 
                    className={`${st.subMenuWrap}`}
                    style={strip ? subMenuWrapActive : subMenuWrapHidden} 
                >
                    {nameTitle === 'pokemons' && <ContentPoke setStrip={setStrip} />}
                </div>

            </section>
            {strip && <div className={st.subMenuBlur}></div>}
        </section>
    );
};
 
export default NavMenu;