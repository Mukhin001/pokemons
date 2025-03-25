import { ReactNode } from 'react';
import st from './style.module.css';
import { useAppDispatch } from '../../app/hooks';
import { openCloseModal } from './modalSlice';
import { WrapperModalStyle } from './modalStyle';

interface Props {
    children?: ReactNode;
    wrapperModalStyle: WrapperModalStyle;
};

const Modal = ( { children, wrapperModalStyle }: Props) => {
    const dispatch = useAppDispatch();
    const handleClickWrapperModal = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        const target = e.target as HTMLElement;
        const name = target.dataset.name;
        
        if(name ==='wrapperModalName') {
            dispatch(openCloseModal(false));
        }
        
    };
    
    return ( 
        <section 
            data-name="wrapperModalName"
            className={st.wrapperModal} 
            onClick={handleClickWrapperModal}
            style={wrapperModalStyle}
        >
            <div className={st.wrapperContent}>
                {/* <button onClick={() => dispatch(openCloseModal(false))} className={st.modalCloseBtn}>X</button> */}
                <div onClick={() => dispatch(openCloseModal(false))} className={st.modalCloseBtn}>
                    <img src='/icon_btn/close_grey.svg' alt="" />
                </div>
                {children}
            </div>
        </section>
     );
};
 
export default Modal;