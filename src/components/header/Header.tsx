import st from './style.module.css';
import NavBar from "../navbar/navBar/NavBar";
import NavIcon from "../navbar/navIcon/NavIcon";
import Theme from "./theme/Theme";

const Header = () => {
  
    return ( 
        <header className={st.header}>
            <Theme />
            <NavIcon />
            <NavBar />
        </header>
     );
};
 
export default Header;