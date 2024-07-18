import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {PokemonContext} from "../context/PokemonContext.jsx";

const useFetchPokemonDetail = (id) => {
    const {pokemonDetail, setPokemonDetail} = useContext(PokemonContext)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(0);

    useEffect(() => {
        const fetchPokemonDetail = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.data;
                const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`

                const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
                const speciesData = await speciesResponse.data;
                const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text;

                const evolutionChainUrl = speciesData.evolution_chain.url;
                const evolutionResponse = await axios.get(evolutionChainUrl);
                const evolutionChain = evolutionResponse.data.chain;

                const getEvolutions = async (chain) => {
                    const evolutions = [];
                    let currentChain = chain;

                    while (currentChain) {
                        const evolutionName = currentChain.species.name;
                        const evolutionResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolutionName}`);
                        const evolutionData = evolutionResponse.data;
                        const evolutionImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolutionData.id}.png`;

                        evolutions.push({
                            id: evolutionData.id,
                            name: evolutionData.name,
                            image: evolutionImage,
                        });

                        if (currentChain.evolves_to.length > 0) {
                            currentChain = currentChain.evolves_to[0];
                        } else {
                            currentChain = null;
                        }
                    }

                    return evolutions;
                };

                const evolutions = await getEvolutions(evolutionChain);

                const filteredStats = data.stats.filter(stat =>
                    ['hp', 'attack', 'defense', 'speed'].includes(stat.stat.name)
                ).map(stat => ({
                    stat: stat.stat.name,
                    value: stat.base_stat,
                }));

                setPokemonDetail({
                    id: data.id,
                    name: data.name,
                    image: image,
                    types: data.types.map(typeInfo => typeInfo.type.name),
                    stats: filteredStats,
                    abilities: data.abilities.map(abilitys => abilitys.ability.name),
                    height: data.height,
                    weight: data.weight,
                    description: description,
                    evolutions: evolutions,
                });
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        }

        fetchPokemonDetail();
    }, [id, setPokemonDetail])

    return {pokemonDetail, isLoading, error}
}

export default useFetchPokemonDetail;
