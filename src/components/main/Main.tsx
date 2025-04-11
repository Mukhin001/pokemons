import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Favorites from "../../pages/favorites/Favorites";
import Profile from "../../pages/profile/Profile";
import PokeCard from "../pokeList/pokeCard/PokeCard";
import Pokemons from "../../pages/pokemons/Pokemons";
import ToDoList from "../../pages/toDoList/ToDoList";

const Main = () => {
    
    return ( 
        <section style={{maxWidth: '1540px', margin: '0 auto'}}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='pokemons' element={<Pokemons />} />
                <Route path="pokemons/:name" element={<PokeCard />} />
                <Route path='todolist' element={<ToDoList />} />
                <Route path='favorites/' element={<Favorites />} />
                <Route path="favorites/:name" element={<PokeCard />} />
                <Route path='profile' element={<Profile />} />
            </Routes>
        </section>
    );
};
 
export default Main;