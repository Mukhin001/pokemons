import Poke from "./poke/Poke";
import Posts from "./posts/Posts";
import ToDoList from "./todolist/ToDoList";

export interface PropsMobMenu {
    nameMenu: string | null;
    setnameMenu: React.Dispatch<React.SetStateAction<string | null>>;
    setshowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const Content = ({ nameMenu, setnameMenu, setshowDrawer }: PropsMobMenu) => {
    return ( 
        <section>
            {nameMenu === 'pokemons' && <Poke nameMenu={nameMenu} setnameMenu={setnameMenu} setshowDrawer={setshowDrawer} />}
            {nameMenu === 'todolist' && <ToDoList nameMenu={nameMenu} setnameMenu={setnameMenu} setshowDrawer={setshowDrawer}/> }
            {nameMenu === 'posts' && <Posts nameMenu={nameMenu} setnameMenu={setnameMenu} setshowDrawer={setshowDrawer}/> }
        </section>
     );
};
 
export default Content;