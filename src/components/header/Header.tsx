import st from './style.module.css';
import { useAppSelector } from '../../app/hooks';
import NavMenu from './navBar/navMenu/NavMenu';
import NavIcon from './navBar/navIcon/NavIcon';
import LocationHead from './location/LocationHead';
import Line from '../line/Line';
import GetLocation from './getLocation/GetLocation';
import { selectCurrentTheme } from '../../utils/themeSlice/themeSlice';
import { selectWidth } from '../../utils/widthWindow/widthWindowSlice';


export interface PropsHeader {
    theme: string | null;
    width?: boolean;
    nameTitle?: string | null;
};

const Header = () => {
    const width = useAppSelector(selectWidth);
    const theme = useAppSelector(selectCurrentTheme);
    
    return ( 
        <header className={st.header}>
            {width && <LocationHead display='flex' backGround={theme === 'light' ? 'white' : 'black'} />}
            <GetLocation />
            <Line />
            <NavIcon />
            {width && <NavMenu />}
        </header>
     );
};
 
export default Header;