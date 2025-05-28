import { ReactNode } from 'react';
import st from './style.module.css';

interface Props {
    close?: boolean;
    header: string;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
};

const Modal = ( { close = true, header, children, setModal }: Props) => {
    
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
            onClick={(e) => close && handleClickWrapperModal(e)}
        >
            <div className={st.wrapperContent}>
                <section className={st.headerWrap}>
                    <h2>{header}</h2>
                    {close ? 
                        <div onClick={() => setModal(false)} className={st.modalCloseBtn}>
                            <img src='/icon_btn/close-black.svg' alt="close" />
                        </div>    
                    :
                        <div></div>
                    }
                </section>
                {children}
            </div>
        </section>
     );
};
 
export default Modal;