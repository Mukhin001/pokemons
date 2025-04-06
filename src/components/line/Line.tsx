import { ReactNode } from 'react';
import st from './style.module.css';

interface Props {
    children?: ReactNode;
};

const Line = ({ children }: Props) => {
    return ( 
        <section className={st.line}>
            {children}
        </section>
     );
};
 
export default Line;