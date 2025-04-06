import Poke from "./poke/Poke";

export interface PropsMobMenu {
    nameMenu?: string | null;
    setnameMenu: React.Dispatch<React.SetStateAction<string | null>>;
    setshowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const Content = ({ nameMenu, setnameMenu, setshowDrawer }: PropsMobMenu) => {
    return ( 
        <section>
            {nameMenu === 'pokemons' && <Poke setnameMenu={setnameMenu} setshowDrawer={setshowDrawer} />}
        </section>
     );
};
 
export default Content;