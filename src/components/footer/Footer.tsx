import { useAppSelector } from "../../app/hooks";
import Line from "../line/Line";
import FooterInfo from "./footerInfo/FooterInfo";
import FooterTop from "./footerTop/FooterTop";

import st from './style.module.css';

const Footer = () => {
    const widthSelector = useAppSelector(state => state.widthWindow.width);

    return ( 
        <footer className={st.mainFooter}>
            <Line />
            <FooterTop />
            <FooterInfo widthSelector={widthSelector} /> 
        </footer>
    );
};
 
export default Footer;