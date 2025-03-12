import { ReactNode } from "react";
import st from './style.module.css';

interface Props {
    children: ReactNode;
    name: string;
};

const Tooltip = ({ children, name }: Props) => {
    return ( 
        <section 
            data-name={name}
            className={st.conteinerTooltip}>
            {children}
        </section>
     );
};
 
export default Tooltip;