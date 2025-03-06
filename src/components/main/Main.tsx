import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Favorites from "../../pages/favorites/Favorites";
import Menu from "../../pages/menu/Menu";
import Profile from "../../pages/profile/Profile";

const Main = () => {
    return ( 
        <section>
            <h2>Main</h2>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </section>
    );
};
 
export default Main;