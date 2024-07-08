import {useCallback, useRef} from "react";
import useFetchPokemon from "../../../hooks/useFetchPokemon.js";
import PokemonCard from "./PokemonCard.jsx";
import Loading from "../../../components/Loading.jsx";

const PokemonList = () => {
    const {pokemonList, isLoading, setOffset} = useFetchPokemon();
    const observer = useRef();

    const lastPokemonElementRef = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setOffset(prevOffset => prevOffset + 20);
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading, setOffset]);

    return (
        <div className="mt-3.5 ">
            <div className="grid grid-cols-2 gap-4 justify-items-center px-4">
                {pokemonList.map((pokemon, index) => (
                    <PokemonCard
                        key={index} pokemon={pokemon}
                        lastPokemonElementRef={pokemonList.length === index + 1 ? lastPokemonElementRef : null}/>
                ))}
                {isLoading && <Loading/>}
            </div>
        </div>
    )
}

export default PokemonList;
