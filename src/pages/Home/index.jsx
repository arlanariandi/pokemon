import useFetchPokemon from "../../hooks/useFetchPokemon.js";
import {useCallback, useRef} from "react";
import Loading from "../../components/Loading.jsx";

const Home = () => {
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
        <div>
            <div className="flex bg-[#e5e7eb] h-40 items-center justify-center">
                <h3>What are you looking for?</h3>
            </div>

            <div className="mt-3.5 ">
                <div className="grid grid-cols-2 gap-4 justify-items-center px-4">
                    {pokemonList.map((pokemon, index) => (
                        <div key={index}
                             className="h-52 w-full rounded-md mb-3.5 p-3.5 flex flex-col justify-between shadow-lg"
                             ref={pokemonList.length === index + 1 ? lastPokemonElementRef : null}
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="font-medium text-sm capitalize">{pokemon.name}</h2>
                                <h2 className="font-light text-xs">#{pokemon.id}</h2>
                            </div>
                            <div className="flex h-28 justify-center items-center">
                                <img src={pokemon.image} alt={pokemon.name} className="h-full object-contain"/>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                {pokemon.types.map((type, index) => (
                                    <p key={index}
                                       className="text-xs bg-really-grey rounded-sm w-full text-center px-2 py-1 text-light-grey capitalize">{type}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                    {isLoading && <Loading/>}
                </div>
            </div>
        </div>
    )
}

export default Home;
