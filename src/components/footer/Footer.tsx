import { useAppSelector } from "../../app/hooks";
import FooterInfo from "./footerInfo/FooterInfo";
import './style.css';

const Footer = () => {
    const widthSelector = useAppSelector(state => state.widthWindow.width);

    return ( 
        <footer className="mainFooter">
               <FooterInfo widthSelector={widthSelector} /> 
        </footer>
    );
};
 
export default Footer;