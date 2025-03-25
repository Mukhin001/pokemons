import { navBarMenu } from '../../navBar/navBarMenu';
import st from './style.module.css';

interface Props {
    setSubName:  React.Dispatch<React.SetStateAction<string | null>>;
    setStripLeft: React.Dispatch<React.SetStateAction<string>>;
    setStripWidth: React.Dispatch<React.SetStateAction<string>>;
};

const NavTitle = ({ setSubName, setStripLeft, setStripWidth }: Props) => {
    
    const handleMouseEnter = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        let subMenu = e.currentTarget.firstElementChild as HTMLElement;  
        let offsetLeft = e.currentTarget.offsetLeft;
        let offsetWidth = e.currentTarget.offsetWidth;
        
        setSubName(subMenu.textContent); 
        setStripLeft(offsetLeft + 'px');
        setStripWidth(offsetWidth + 'px');
    };

    return ( 
        <div className={st.wrapTitle}>
                {navBarMenu.map(obj => 
                    <div key={obj.name} className={st.navTitleWrap}
                        onMouseEnter={handleMouseEnter}
                    >
                        <h3>{obj.name}</h3>
                    </div>
                )}
            </div>
     );
}
 
export default NavTitle;