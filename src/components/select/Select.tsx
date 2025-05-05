import { useAppSelector } from '../../app/hooks';
import { SortKey } from '../../utils/sortUtils/sortUtils';
import { selectCurrentTheme } from '../../utils/themeSlice/themeSlice';
import st from './select.module.css';

export type Triangle = 'up' | 'down';

interface Props {
    name: string;
    triangle: Triangle;
    setTriangle: React.Dispatch<React.SetStateAction<Triangle>>;
    arrayProps: string[];
    keySort: SortKey;
    setKeySort: React.Dispatch<React.SetStateAction<SortKey>>;
};

const Select = ({ name, triangle, setTriangle, arrayProps, keySort, setKeySort }: Props) => {
    const theme = useAppSelector(selectCurrentTheme);
    
    const handleSection = () => {
        const imgToggle = triangle === 'down' ? 'up' : 'down';
        setTriangle(imgToggle);
    };

    const handleSetValueLi = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const valueLi = e.currentTarget.innerText as SortKey;
        if(keySort !== valueLi) {
            
            setKeySort(valueLi);
        }
        setTriangle('down'); 
    };

    return ( 
        <section>
            <div className={`${st.wrapSelect} ${st['wrapSelect' + theme]}`}
                onFocus={(e) => e.currentTarget.classList.add(st.wrapSelectfocus)}
                onBlur={(e) => e.currentTarget.classList.remove(st.wrapSelectfocus)}
            >
                <div className={st.wrapHeader} onClick={handleSection}>
                    <h3 
                        className={`${st.header} ${keySort && `${st.headerup}`} ${st['header' + triangle]} ${st['header' + theme]}`}
                        >{name}</h3>
                    <h3 style={{visibility: 'hidden'}}>{name}</h3>
                    <h3 className={st.header}>{keySort}</h3>
                    <div className={st.wrapImg}>
                        <img src={`/arrow/triangle-${triangle}-${theme}.svg`} alt="" />
                    </div>
                </div>

                <ul 
                    style={triangle === 'down' ? {opacity: '0', zIndex: '0', pointerEvents: 'none'} : {opacity: '1', zIndex: '3', top: '103%', pointerEvents: 'auto'}}
                    className={`${st.wrapUl} ${st['wrapUl' + theme]} ${arrayProps.length > 10 && st.scrollUl}`}>
                    {arrayProps.map(el => 
                        <li 
                            onClick={handleSetValueLi}
                            key={el} className={st.selectLi}
                        >{el}</li>
                    )}
                </ul>
            </div>
        </section>
     );
};
 
export default Select;