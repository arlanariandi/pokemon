import {createContext, useEffect, useState} from 'react';

export const PokemonContext = createContext();

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({children}) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState(null);
    const [description, setDescription] = useState('');
    const [favorites, setFavorites] = useState([]);

    // Load favorites from local storage on component mount
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (savedFavorites) {
            setFavorites(savedFavorites);
        }
    }, []);

    // Save favorites to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

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
