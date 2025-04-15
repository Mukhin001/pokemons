import { ReactNode } from 'react';
import st from './style.module.css';

interface Props {
    header: string;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
};

const Modal = ( { header, children, setModal }: Props) => {
    
    const handleClickWrapperModal = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        const target = e.target as HTMLElement;
        const name = target.dataset.name;
        if(name === header) {
            setModal(false);
        }
    };
    
    return ( 
        <section 
            data-name={header}
            className={st.wrapperModal} 
            onClick={handleClickWrapperModal}
        >
            <div className={st.wrapperContent}>
                <section className={st.headerWrap}>
                    <h2>{header}</h2>
                    <div onClick={() => setModal(false)} className={st.modalCloseBtn}>
                        <img src='/icon_btn/close-black.svg' alt="close" />
                    </div>
                </section>
                {children}
            </div>
        </section>
     );
};
 
export default Modal;