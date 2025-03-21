// import { navBarMenu } from "./navBarMenu";
import NavMenu from '../navMenu/NavMenu';
import st from './NavBar.module.css';
import { useState } from "react";

const NavBar = () => {
    const [stripWidth, setStripWidth] = useState<string>('40px');
    const [stripLeft, setStripLeft] = useState<string>('0');
    const [strip, setStrip] = useState<boolean>(false);

    return ( 
        <nav>
            <h3 className={st.heading}>Nav Bar</h3>
            <section >
                <NavMenu setStripWidth={setStripWidth} setStripLeft={setStripLeft} setStrip={setStrip} />
                {/* <div className={st.line}>
                    <div 
                        style={
                            {   left: `${stripLeft}`, 
                                width: `${stripWidth}`,
                                visibility: strip ? 'visible' : 'hidden',
                            }} 
                        className={st.strip}>
                    </div>
                </div> */}
            </section>
        </nav>
     );
};
 
export default NavBar;