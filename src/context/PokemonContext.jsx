import {createContext, useState} from 'react';

export const PokemonContext = createContext();

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({children}) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (pokemon) => {
        setFavorites([...favorites, pokemon]);
    };

    const removeFavorite = (pokemon) => {
        setFavorites(favorites.filter(fav => fav.id !== pokemon.id));
    };

    return (
        <PokemonContext.Provider value={{pokemonList, setPokemonList, favorites, addFavorite, removeFavorite}}>
            {children}
        </PokemonContext.Provider>
    );
};
