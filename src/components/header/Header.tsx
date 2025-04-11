import st from './style.module.css';
import { useAppSelector } from '../../app/hooks';
import NavMenu from './navBar/navMenu/NavMenu';
import NavIcon from './navBar/navIcon/NavIcon';
import LocationHead from './location/LocationHead';
import Line from '../line/Line';
import GetLocation from './getLocation/GetLocation';


export interface PropsHeader {
    theme: string | null;
    width?: boolean;
    nameTitle?: string | null;
};

const Header = () => {
    const width = useAppSelector(state => state.widthWindow.width);
    const theme = useAppSelector(state => state.theme.value);

    return ( 
        <header className={st.header}>
            {width && <LocationHead display='flex' backGround='black' />}
            <GetLocation />
            <Line />
            <NavIcon theme={theme} width={width} />
            {width && <NavMenu />}
        </header>
     );
};
 
export default Header;