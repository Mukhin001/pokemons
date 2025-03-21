import { useState } from "react";
import { navBarMenu } from "../navBar/navBarMenu";
import st from './style.module.css';
import SubContent from "./subContent/SubContent";

interface Props {
    setStripLeft: React.Dispatch<React.SetStateAction<string>>;
    setStripWidth: React.Dispatch<React.SetStateAction<string>>;
    setStrip: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMenu = ({ setStripLeft, setStripWidth, setStrip }: Props) => {
    const [subName, setSubName] = useState<string | null>('');
    
    const handleMouseEnterMain = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        let offsetLeft = e.currentTarget.offsetLeft;
        let offsetWidth = e.currentTarget.offsetWidth;
        let subMenuWrap = e.currentTarget.lastElementChild as HTMLElement;
        
        setStripLeft(offsetLeft + 'px');
        setStripWidth(offsetWidth + 'px');
        setStrip(true);
       
        if(subMenuWrap) {
            subMenuWrap.style.transform = 'translateY(0)';
            subMenuWrap.style.opacity = '1';
            subMenuWrap.style.pointerEvents = 'auto';
        }

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
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        let subMenu = e.currentTarget.firstElementChild as HTMLElement;
        setSubName(subMenu.textContent);   
    };

    return ( 
        <div className={st.wrapperMenu}
        onMouseEnter={handleMouseEnterMain}
        onMouseLeave={handleMouseLeaveMain}
        >
            {navBarMenu.map(obj => 
                <div key={obj.name} className={st.navTitleWrap}
                onMouseEnter={handleMouseEnter}
                >
                    <h3>{obj.name}</h3>
                </div>
            )}
                <div className={st.subMenuWrap}>
                       <SubContent subName={subName}/>
                </div>
        </div>
    );
};
 
export default NavMenu;