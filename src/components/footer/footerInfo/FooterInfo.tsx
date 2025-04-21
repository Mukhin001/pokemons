import FooterContact from "./footerContact/FooterContact";
import { footerList } from "../footerList";
import { wrapperListMob, wrapperListWeb, wrapperMob, wrapperUlInfoMob, wrapperUlInfoWeb, wrapperWeb } from "./footerInfoStyle";
import './style.css';
import Line from "../../line/Line";
import { useAppSelector } from "../../../app/hooks";
import { selectWidth } from "../../../utils/widthWindow/widthWindowSlice";

const FooterInfo = () => {
    const width = useAppSelector(selectWidth);

    const handleClickTitle = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>): void => {
        let height: any  = e.currentTarget.lastChild;
        let btnH3: any = e.currentTarget.firstChild?.lastChild;
        
        if(!width) {
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
            <section style={width ? wrapperWeb : wrapperMob}>
                    {footerList.map(obj => 
                        <div 
                            className="wrapperList" 
                            style={width ? wrapperListWeb : wrapperListMob} 
                            key={obj.title} 
                            onClick={handleClickTitle}
                        >
                        
                            <div className='wrapperH3Title'>
                                <h3>{obj.title}</h3>
                                {!width && <h3>+</h3>}
                            </div>
                            {!width && <hr />}
                            <ul className="wrapperUlInfo" style={width ? wrapperUlInfoWeb : wrapperUlInfoMob}>
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