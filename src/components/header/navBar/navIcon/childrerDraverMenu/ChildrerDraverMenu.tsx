import { useState } from "react";
import { navBarMenu } from "../../navMenu/subContent";
import Content from "./content/Content";
import st from './style.module.css';
import Btns from "./content/btns/Btns";

export interface Props {
    theme: string | null;
    setshowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChildrerDraverMenu = ({ theme, setshowDrawer }: Props) => {
    const [nameMenu, setnameMenu] = useState<string | null>('');

    const handleCkickTitle = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setnameMenu(e.currentTarget.textContent);
    };
    
    return ( 
        <section>
            {!nameMenu && 
                <section>

                    <Btns back={null} setName={setnameMenu} name='Moscow' setshowDrawer={setshowDrawer}/>

                    <ul>
                        {navBarMenu.map(el => 
                            <li key={el.name} onClick={handleCkickTitle} className={st.headerLi}>
                                <div>{el.name}</div>
                                <div className={st.wrapImgNext}>
                                    <img src="/arrow/next-grey-fat.svg" alt="arrowNext" />
                                </div>
                            </li>
                        )}
                    </ul>
                </section>
            }
            {nameMenu &&  
                <Content nameMenu={nameMenu} setnameMenu={setnameMenu} setshowDrawer={setshowDrawer} />
            }
        </section>
     );
};
 
export default ChildrerDraverMenu;