import NavBar from "../navbar/navBar/NavBar";
import NavIcon from "../navbar/navIcon/NavIcon";
import Theme from "./theme/Theme";

const Header = () => {
    return ( 
        <header>
            <h1>Header</h1>
            <Theme />
            <NavIcon />
            <NavBar />
        </header>
     );
};
 
export default Header;