import {createContext, useState} from 'react';

export const PokemonContext = createContext();

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({children}) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState(null);
    const [description, setDescription] = useState('');

    console.log(pokemonDetail, '===')

    const [favorites, setFavorites] = useState([]);

    const addFavorite = (pokemon) => {
        setFavorites([...favorites, pokemon]);
    };

    const removeFavorite = (pokemon) => {
        setFavorites(favorites.filter(fav => fav.id !== pokemon.id));
    };

    return (
        <PokemonContext.Provider value={{
            pokemonList,
            setPokemonList,
            pokemonDetail,
            setPokemonDetail,
            description,
            setDescription,
            favorites,
            addFavorite,
            removeFavorite
        }}>
            {children}
        </PokemonContext.Provider>
    );
};
