import { useAppSelector } from '../../../../../../../app/hooks';
import st from '../../style.module.css';

interface Props {
    back: string | null;
    setName: React.Dispatch<string | null>;
    name: string | null;
    setshowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const Btns = ({ back, setName, name, setshowDrawer }: Props) => {
    const theme = useAppSelector(state => state.theme.value);

    return ( 
        <section className={st.wrapArrow} onClick={() => setName(null)}>
            {back && 
                <div className={st.btnBackClose}>
                    <img src={theme === 'light' ? '/arrow/back-arrow-black.svg' : '/arrow/back-arrow-white.svg'} alt="back" />
                </div>}
            <h3>{name}</h3>
            <div className={st.btnBackClose} onClick={() => setshowDrawer(false)}>
                <img src={theme === 'light' ? '/arrow/close-black.svg' : '/arrow/close-white.svg'} alt="back" />
            </div>
        </section>
    );
};
 
export default Btns;