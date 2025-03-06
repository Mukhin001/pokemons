import { ReactNode } from 'react';
import './style.css';
import { useAppDispatch } from '../../app/hooks';
import { openCloseModal } from './modalSlice';
import { WrapperModalStyle } from './modalStyle';

interface Props {
    header: string;
    children?: ReactNode;
    wrapperModalStyle: WrapperModalStyle;
};

const Modal = ( { header, children, wrapperModalStyle }: Props) => {
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
            className='wrapperModal' 
            onClick={handleClickWrapperModal}
            style={wrapperModalStyle}
        >
            <div className='wrapperContent'>
                <div className='wrapperBtnClose'>
                    <button onClick={() => dispatch(openCloseModal(false))}>X</button>
                </div>
                <h3>{header}</h3>
                {children}
            </div>
        </section>
     );
};
 
export default Modal;