import { Link, useLocation } from "react-router-dom";
import st from './style.module.css';
import { useAppSelector } from "../../../app/hooks";
import { selectCurrentTheme } from "../../../utils/themeSlice/themeSlice";

const BreadCrumds = () => {
    const theme = useAppSelector(selectCurrentTheme);
    const location = useLocation();
    let locationArr: string[] = [];
    
    if(location.pathname.length > 1) {
        locationArr.length = 0;
        locationArr = location.pathname.split('/');
    }

    const lacationArrLength = locationArr.length -1;

    const content = locationArr.map((el, i) => {
        if(el.length === 0) {
            return (
                <li key='home' className={st.homeLink}>
                    <Link to='/'>
                        <img src={`/icons_menu/home_${theme}.svg`} alt="home" />
                    </Link>
                </li>
            )
        } else if(i === lacationArrLength) {
            return <li key={el}>{el}</li>
        } else {
            return (
                <li key={el} className={st.liLink}>
                    <Link to={el}>{el}</Link>
                </li>
            )
        }
    });

    return ( 
        <ul className={st.breadContainer}>
            {content}
        </ul>
     );
};
 
export default BreadCrumds;