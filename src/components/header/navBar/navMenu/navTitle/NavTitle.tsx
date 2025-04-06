
import { Link } from 'react-router-dom';
import { navBarMenu } from '../subContent';
import st from './style.module.css';

interface Props {
    setStrip: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    setStripLeft: React.Dispatch<React.SetStateAction<string>>;
    setNameTitle: React.Dispatch<React.SetStateAction<string | null>>;
    setStripWidth: React.Dispatch<React.SetStateAction<string>>;
};

const NavTitle = ({ setStrip, setStripLeft, setStripWidth, setNameTitle }: Props) => {
    
    const handleMouseEnter = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {  
        const offsetLeft = e.currentTarget.offsetLeft;
        const offsetWidth = e.currentTarget.clientWidth;
        const nameTitle = e.currentTarget.firstChild as HTMLElement;

        setNameTitle(nameTitle.textContent);
        setStripLeft(offsetLeft + 'px');
        setStripWidth(offsetWidth + 'px');
        
    };

    const handleClickTitle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const nameTitle = e.currentTarget.firstChild as HTMLElement;

        if(setNameTitle) setNameTitle(nameTitle.textContent);
    };

    return ( 
        <div className={st.wrapTitle}>
            {navBarMenu.map(obj => 
                <div key={obj.name} className={st.navTitleWrap}
                    onMouseEnter={handleMouseEnter}
                    onClick={handleClickTitle}
                >
                    <Link to={obj.urlMenu} onClick={() => setStrip(false)}>
                        <h3>{obj.name}</h3>
                    </Link> 
                </div>
            )}
        </div>
     );
};
 
export default NavTitle;