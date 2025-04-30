import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Favorites from "../../pages/favorites/Favorites";
import Profile from "../../pages/profile/Profile";
import PokeCard from "../pokeList/pokeCard/PokeCard";
import Pokemons from "../../pages/pokemons/Pokemons";
import ToDoList from "../../pages/toDoList/ToDoList";
import BreadCrumds from "./breadCrumds/BreadCrumds";
import Posts from "../../pages/posts/Posts";
import PostCard from "../../pages/posts/postCard/PostCard";
import { useAppSelector } from "../../app/hooks";

const Main = () => {
    const user = useAppSelector(state => state.authUser.name);
    
    return ( 
        <div>
            <div style={{maxWidth: '1540px', margin: '0 auto'}}>
                <BreadCrumds />
                <section style={{maxWidth: '1440px', margin: '0 auto'}}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='pokemons' element={<Pokemons />} />
                        <Route path="pokemons/:name" element={<PokeCard />} />
                        <Route path='todolist' element={<ToDoList />} />
                        <Route path='favorites/' element={ <Favorites /> } /> 
                        <Route path="favorites/:name" element={<PokeCard />} />
                        <Route path='profile' element={user ? <Profile /> : <Home />} />
                        <Route path='posts' element={<Posts />} />
                        <Route path='posts/:title' element={<PostCard />} />
                    </Routes>
                </section>
            </div>
        </div>
    );
};
 
export default Main;