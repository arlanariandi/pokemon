import arrow from '../../../assets/arrow-down.png'
import PropTypes from "prop-types";
import PokemonList from "../../../components/PokemonList.jsx";

const PokemonEvolution = ({pokemonEvolution}) => {
    return (
        <div className="bg-light-grey p-6 rounded-md mb-6">
            <h2 className="mb-4">Evolutions</h2>

            {pokemonEvolution?.evolutions.map((evolution, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img src={arrow} alt="arrow down" className={`w-4 mb-4 ${index === 0 ? 'hidden' : ''}`}/>
                    <PokemonList key={index} pokemon={evolution}/>
                </div>
            ))}
        </div>
    )
}

PokemonEvolution.propTypes = {
    pokemonEvolution: PropTypes.object.isRequired,
}

export default PokemonEvolution;
