import { useState } from "react";
import st from './style.module.css';
import SubContent from "./subContent/SubContent";
import NavLine from "./navLine/NavLine";
import NavTitle from "./navTitle/NavTitle";

const NavMenu = () => {
    const [subName, setSubName] = useState<string | null>('');
    const [stripWidth, setStripWidth] = useState<string>('40px');
    const [stripLeft, setStripLeft] = useState<string>('0');
    const [strip, setStrip] = useState<boolean>(false);
    const [timeoutId, setTimeoutid] = useState<number | null>(null);
    
    const handleMouseEnterMain = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        let subMenuWrap = e.currentTarget.lastElementChild as HTMLElement;

        const timeOut = setTimeout(() => {
            if(subMenuWrap) {
                subMenuWrap.style.transform = 'translateY(0)';
                subMenuWrap.style.opacity = '1';
                subMenuWrap.style.pointerEvents = 'auto';
                setStrip(true);
            }
        }, 200);
        setTimeoutid(timeOut);
    };

    const handleMouseLeaveMain = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        let subMenuWrap = e.currentTarget.lastElementChild as HTMLElement;
    
        setStripLeft('-10%');
        setStripWidth('40px');
        setStrip(false);

        if(subMenuWrap) {
            subMenuWrap.style.transform = 'translateY(-10px)';
            subMenuWrap.style.opacity = '0';
            subMenuWrap.style.pointerEvents = 'none';
        }   
        setSubName('');
        if(timeoutId) clearTimeout(timeoutId);
    };

    return ( 
        <section>
            <section className={st.wrapperMenu}
                onMouseEnter={handleMouseEnterMain}
                onMouseLeave={handleMouseLeaveMain} 
            >

                <NavTitle setSubName={setSubName} setStripLeft={setStripLeft} setStripWidth={setStripWidth} />

                <NavLine stripWidth={stripWidth} stripLeft={stripLeft} strip={strip} />

                <div className={`${st.subMenuWrap}`}>
                    <SubContent subName={subName} />
                </div>

            </section>
            {strip && <div className={st.subMenuBlur}></div>}
        </section>
    );
};
 
export default NavMenu;