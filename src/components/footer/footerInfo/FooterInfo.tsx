import FooterContact from "./footerContact/FooterContact";
import { footerList } from "../footerList";
import { wrapperListMob, wrapperListWeb, wrapperMob, wrapperUlInfoMob, wrapperUlInfoWeb, wrapperWeb } from "./footerInfoStyle";
import './style.css';
import Line from "../../line/Line";

interface Props {
    widthSelector: boolean;
};

const FooterInfo = ({ widthSelector }: Props) => {
    
    const handleClickTitle = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>): void => {
        let height: any  = e.currentTarget.lastChild;
        let btnH3: any = e.currentTarget.firstChild?.lastChild;

        if(!widthSelector) {
            if(e.currentTarget.style.marginBottom === '') {
                btnH3.textContent = 'x';
                e.currentTarget.style.marginBottom = height.clientHeight + 'px';
            } else {
                btnH3.textContent = '+';
                e.currentTarget.style.marginBottom = '';
            }
        }    
    };

    return ( 
        <section className="container">
            <section style={widthSelector ? wrapperWeb : wrapperMob}>
                    {footerList.map(obj => 
                        <div 
                            className="wrapperList" 
                            style={widthSelector ? wrapperListWeb : wrapperListMob} 
                            key={obj.title} 
                            onClick={handleClickTitle}
                        >
                        
                            <div className='wrapperH3Title'>
                                <h3>{obj.title}</h3>
                                {!widthSelector && <h3>+</h3>}
                            </div>
                            {!widthSelector && <hr />}
                            <ul className="wrapperUlInfo" style={widthSelector ? wrapperUlInfoWeb : wrapperUlInfoMob}>
                                {obj.list.map(li => 
                                    <li key={li}>{li}</li>
                                )}
                            </ul>
                        </div>
                    )}
                    <FooterContact />
            </section>

            <Line />
        </section>
     );
};
 
export default FooterInfo;