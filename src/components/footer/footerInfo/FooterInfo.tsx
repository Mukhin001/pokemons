import { useRef, useState } from "react";
import FooterContact from "../footerContact/FooterContact";
import { footerList } from "../footerList";
import { wrapperListMob, wrapperListWeb, wrapperMob, wrapperUlInfoMob, wrapperUlInfoWeb, wrapperWeb } from "./footerInfoStyle";
import './style.css';

interface Props {
    widthSelector: boolean;
};

const FooterInfo = ({ widthSelector }: Props) => {

    const handleClickTitle = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>): void => {
        let ulInfoStyle = e.currentTarget.lastChild as HTMLElement;
        let h3Plus = e.currentTarget.firstChild as HTMLElement;
        if(!widthSelector) {
            if(ulInfoStyle.style.display === 'none') {
                h3Plus.children[1].textContent = 'x';
                ulInfoStyle.style.display = 'block';
            } else {
                h3Plus.children[1].textContent = '+';
                ulInfoStyle.style.display = 'none';
            }
        }
    };

    return ( 
        <section style={widthSelector ? wrapperWeb : wrapperMob}>
            {footerList.map(obj => 
                    <div style={widthSelector ? wrapperListWeb : wrapperListMob} key={obj.title} onClick={handleClickTitle}>
                       
                        <div className='wrapperH3Title'>
                            <h3>{obj.title}</h3>
                            {!widthSelector && <h3>+</h3>}
                        </div>
                        {!widthSelector && <hr />}
                        <ul style={widthSelector ? wrapperUlInfoWeb : wrapperUlInfoMob}>
                            {obj.list.map(li => 
                                <li key={li}>{li}</li>
                            )}
                        </ul>
                    </div>
                )}
                <FooterContact />
        </section>
     );
};
 
export default FooterInfo;