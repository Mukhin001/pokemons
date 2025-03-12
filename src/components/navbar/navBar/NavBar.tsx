import { navBarMenu } from "./navBarMenu";
import st from './NavBar.module.css';
import { useState } from "react";

const NavBar = () => {
    const [stripWidth, setStripWidth] = useState<string>('40px');
    const [stripLeft, setStripLeft] = useState<string>('0');
    const [strip, setStrip] = useState<boolean>(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        let rr = e.currentTarget.offsetLeft;
        let rrr = e.currentTarget.offsetWidth;
        setStripLeft(rr + 'px');
        setStripWidth(rrr + 'px');
        setStrip(true);
    };
    const handleMouseLeave = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        setStripLeft('-10%');
        setStripWidth('40px');
        setStrip(false);
    };
    return ( 
        <nav>
            <h3 className={st.heading}>Nav Bar</h3>
            <section >
                <div className={st.headindTest}>
                    {navBarMenu.map(obj => 
                        <h3
                            key={obj.name}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >{obj.name}
                        </h3>
                    )}
                </div>
                <div className={st.line}>
                    <div 
                        style={
                            {   left: `${stripLeft}`, 
                                width: `${stripWidth}`,
                                visibility: strip ? 'visible' : 'hidden',
                            }} 
                        className={st.strip}>
                    </div>
                </div>
            </section>
            <section className={st.wrapperMenu}>
                {navBarMenu.map(obj => 
                    <section className={st.wrapperName} key={obj.name}>
                        <h3 
                            className={st.name}
                        >{obj.name}</h3>
                        <ul className={st.wrapperLi}>
                            {obj.arr.map(li => 
                                <li key={li}>{li}</li>
                            )}
                        </ul>
                    </section>
                )}
            </section>
        </nav>
     );
};
 
export default NavBar;