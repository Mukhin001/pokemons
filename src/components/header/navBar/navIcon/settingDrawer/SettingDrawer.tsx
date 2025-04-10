import LocationHead from "../../../location/LocationHead";
import Theme from "../../../theme/Theme";
import st from '../childrerDraverMenu/style.module.css';

interface Props {
    theme: string | null;
    setshowDrawerSetting: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingDrawer = ({ theme, setshowDrawerSetting }: Props) => {
    return ( 
        <section >
            <div className={st.wrapArrow}>
                <h3>Setting</h3>
                <div className={st.btnBackClose} onClick={() => setshowDrawerSetting(false)}>
                    <img src={theme === 'light' ? '/arrow/close-black.svg' : '/arrow/close-white.svg'} alt="back" />
                </div>
            </div>
            <Theme theme={theme} />
            <LocationHead display="block" backGround="inherit"/>
        </section>
     );
};
 
export default SettingDrawer;