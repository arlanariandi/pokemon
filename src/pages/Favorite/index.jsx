import {useContext} from "react";
import {PokemonContext} from "../../context/PokemonContext.jsx";
import Navbar from "../../components/Navbar.jsx";
import PokemonList from "../../components/PokemonList.jsx";
import Menubar from "../../components/Menubar.jsx";

const Favorite = () => {
    const {favorites} = useContext(PokemonContext);

    return (
        <>
            <Navbar title="Favorites"/>
            <div className="px-4 my-6">
                {favorites.map((pokemon, index) => (
                    <PokemonList key={index} pokemon={pokemon}/>
                ))}
            </div>
            <Menubar/>
        </>
    )
}

export default Favorite;
