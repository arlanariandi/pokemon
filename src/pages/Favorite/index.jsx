import {useContext} from "react";
import {PokemonContext} from "../../context/PokemonContext.jsx";
import Navbar from "../../components/Navbar.jsx";
import PokemonList from "../../components/PokemonList.jsx";
import Menubar from "../../components/Menubar.jsx";
import emFav from "../../assets/touch.png"

const Favorite = () => {
    const {favorites} = useContext(PokemonContext);

    return (
        <>
            <Navbar title="Favorites"/>
            <div className="px-4 my-6">
                {favorites.length === 0 ? (
                    <div className="flex flex-col h-96 items-center justify-center">
                        <img src={emFav} alt="" className="w-36"/>
                        <h3 className="font-semibold text-lg mt-8">Not Favorites Yet</h3>
                        <p className="text-sm mt-2">Please add your favorite Pokemon</p>
                    </div>
                ) : (
                    favorites.map((pokemon, index) => (
                        <PokemonList key={index} pokemon={pokemon}/>
                    ))
                )}
            </div>
            <Menubar/>
        </>
    )
}

export default Favorite;
