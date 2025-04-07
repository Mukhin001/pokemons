import st from './style.module.css';
import { useAppSelector } from '../../app/hooks';
import NavMenu from './navBar/navMenu/NavMenu';
import NavIcon from './navBar/navIcon/NavIcon';

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
            <NavIcon theme={theme} width={width} />
            {width && <NavMenu />}
        </header>
     );
};
 
export default Header;