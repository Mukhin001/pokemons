import st from './style.module.css';

interface Props {
    stripWidth: string;
    stripLeft: string;
    strip: boolean;
};

const NavLine = ({ stripWidth, stripLeft, strip }: Props) => {
    return ( 
        <section className={st.line}>
            <div 
                style={
                    {   left: `${stripLeft}`, 
                        width: `${stripWidth}`,
                        visibility: strip ? 'visible' : 'hidden',
                    }} 
                className={st.strip}
            >
            </div>
        </section>
     );
};
 
export default NavLine;