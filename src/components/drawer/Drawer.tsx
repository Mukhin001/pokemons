import { ReactNode } from 'react';
import st from './style.module.css';

interface Props {
    positionProps: string;
    showDrawer: boolean;
    setshowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
    theme?: string | null;
    children: ReactNode;
};

interface TranslateDrawer {
    bottom?: string,
    left?: string,
    display?: string,
    width?: string,
    height?: string,
    top?: string,
};

const Drawer = ({ positionProps, theme, showDrawer, children, setshowDrawer }: Props) => {
    let transform: TranslateDrawer = { };

    switch(positionProps) {
        case 'left':
            const positionX = showDrawer ? '0' : '-100%';
            transform = { top: '0', left: positionX, display: 'block', height: '100vh'};
            break;
        case 'bottom': 
            const positionY = showDrawer ? '0' : '-100%';
            transform = { bottom: positionY, display: 'flex', width: '100%' };
            break;
    }

    const handleClickDrawer = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if(Object.keys(element.dataset)[0] === 'wrapperdrawer') setshowDrawer(false);
    };

    return ( 
        <section
            data-wrapperdrawer='wrapperdrawer'
            className={`${showDrawer && `${st.wrapperDrawer}`}`} 
            onClick={handleClickDrawer}
        >
            <div className={`
                    ${st.wrapContent}
                    ${theme === 'light' ? `${st.wrapContentLight}` : `${st.wrapContentDark}`}    
                `}
                style={transform}
                >
                {showDrawer && children}
            </div>
        </section>
     );
};
 
export default Drawer;