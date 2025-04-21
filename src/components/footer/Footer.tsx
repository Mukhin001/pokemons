import Line from "../line/Line";
import FooterInfo from "./footerInfo/FooterInfo";
import FooterTop from "./footerTop/FooterTop";

import st from './style.module.css';

const Footer = () => {

    return ( 
        <footer className={st.mainFooter}>
            <Line />
            <FooterTop />
            <FooterInfo /> 
        </footer>
    );
};
 
export default Footer;