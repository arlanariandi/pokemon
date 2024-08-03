import PokemonList from "./components/PokemonList.jsx";
import pokemonBall from './../../assets/pokemonball.png';

const Home = () => {
    return (
        <>
            <div className="relative h-48 md:h-56 content-center px-8 bg-main-blue mb-8">
                <h3 className="text-xl md:text-2xl font-light text-light-grey">What are you <br/> looking for?</h3>
                <img src={pokemonBall} alt="logo-pokemonball"
                     className="absolute w-32 -end-8 -top-8 md:w-40 md:end-0 md:-top-10 opacity-30"/>
                <form className="max-w-md mx-auto mt-6">
                    <label htmlFor="default-search"
                           className="mb-2 text-sm font-medium text-really-grey sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-really-grey" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>

                        <input type="search" id="default-search"
                               className="block w-full p-2 ps-10 text-sm text-really-grey border-none rounded-full bg-light-grey"
                               placeholder="E.g. Pikachu" required/>
                        <button
                            type="submit"
                            className="text-light-grey absolute end-1 bottom-1 bg-types-dark hover:bg-types-dark hover:opacity-80 rounded-full text-sm px-4 py-1">
                            Go
                        </button>
                    </div>
                </form>
            </div>

            <PokemonList/>


        </>
    )
}

export default Home;
