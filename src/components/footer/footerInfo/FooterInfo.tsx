import FooterContact from "../footerContact/FooterContact";
import { footerList } from "../footerList";
import { wrapperListMob, wrapperListWeb, wrapperMob, wrapperUlInfoMob, wrapperUlInfoWeb, wrapperWeb } from "./footerInfoStyle";
import './style.css';

interface Props {
    widthSelector: boolean;
};

const FooterInfo = ({ widthSelector }: Props) => {
    
    const handleClickTitle = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>): void => {

        if(!widthSelector) {
            if(e.currentTarget.style.marginBottom === '') {
                e.currentTarget.style.marginBottom = '100px';
            } else {
                e.currentTarget.style.marginBottom = '';
            }
        }
    };

    return ( 
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
     );
};
 
export default FooterInfo;