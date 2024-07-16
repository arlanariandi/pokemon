import {useCallback, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {PokemonContext} from "../context/PokemonContext.jsx";

const useFetchPokemon = () => {
    const {pokemonList, setPokemonList} = useContext(PokemonContext)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);
    const limit = 20;

    const fetchPokemon = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const results = response.data.results;

            const detailedPokemonList = await Promise.all(results.map(async (pokemon) => {
                const pokemonDetails = await axios.get(pokemon.url);
                const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.data.id}.png`

                return {
                    id: pokemonDetails.data.id,
                    name: pokemonDetails.data.name,
                    image: image,
                    types: pokemonDetails.data.types.map(typeInfo => typeInfo.type.name),
                };
            }));

            setPokemonList(prevList => {
                const existingIds = new Set(prevList.map(pokemon => pokemon.id));
                const newPokemon = detailedPokemonList.filter(pokemon => !existingIds.has(pokemon.id));
                return [...prevList, ...newPokemon];
            });
            setIsLoading(false);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    }, [offset]);

    useEffect(() => {
        fetchPokemon();
    }, [fetchPokemon]);

    return {pokemonList, isLoading, error, setOffset};
}

export default useFetchPokemon;
