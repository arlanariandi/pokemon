import {useEffect, useState} from "react";
import axios from "axios";

const useFetchPokemonDetail = (id) => {
    const [pokemonDetail, setPokemonDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(0);

    useEffect(() => {
        const fetchPokemonDetail = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.data;
                const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`

                setPokemonDetail({
                    id: data.id,
                    name: data.name,
                    image: image,
                    types: data.types.map(typeInfo => typeInfo.type.name),
                    stats: data.stats.map(stat => ({
                        stat: stat.stat.name,
                        value: stat.base_stat,
                    })),
                });
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        }

        fetchPokemonDetail();
    }, [id])

    return {pokemonDetail, isLoading, error}
}

export default useFetchPokemonDetail;
