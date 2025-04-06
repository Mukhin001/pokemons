import { useState } from "react";
import { navBarMenu } from "../../navMenu/subContent";
import Content from "./content/Content";
import st from './style.module.css';

export interface Props {
    setshowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChildrerDraverMenu = ({ setshowDrawer }: Props) => {
    const [nameMenu, setnameMenu] = useState<string | null>('');

    const handleCkickTitle = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setnameMenu(e.currentTarget.textContent);
    };
    
    return ( 
        <section>
            {!nameMenu && 
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
            }
            {nameMenu &&
                 <div>
                    <button onClick={() => setnameMenu('')}>back main menu</button>
                    <Content nameMenu={nameMenu} setnameMenu={setnameMenu} setshowDrawer={setshowDrawer} />
                </div>
            }
        </section>
     );
};
 
export default ChildrerDraverMenu;