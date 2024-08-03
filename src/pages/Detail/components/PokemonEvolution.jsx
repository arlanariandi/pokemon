import arrow from '../../../assets/arrow-down.png'
import PropTypes from "prop-types";
import {twMerge} from "tailwind-merge";
import {useNavigate} from "react-router-dom";

const PokemonEvolution = ({pokemonEvolution, pokemonElementEvolution}) => {
    const navigate = useNavigate();
    const formatId = id => id.toString().padStart(4, '0');

    const handleClick = (name) => {
        navigate(`/pokedex/${name}`);
    }

    return (
        <div className="bg-light-grey p-6 rounded-md mb-6">
            <h2 className="mb-4">Evolutions</h2>

            {pokemonEvolution?.evolutions.map((evolution, index) => (
                <div key={index} className="flex flex-col items-center mb-4">
                    <img src={arrow} alt="arrow down" className={`w-4 mb-4 ${index === 0 ? 'hidden' : ''}`}/>

                    <div className="w-full px-14 py-2 rounded-md hover:bg-really-grey/10 cursor-pointer"
                         onClick={() => handleClick(evolution.name)}>
                        <div className="flex items-center justify-between gap-4">
                            <img src={evolution?.image} alt={evolution?.name}
                                 className="w-20 rounded-full"/>

                            <div className="w-full">
                                <div className="w-full mb-2">
                                    <div className="flex justify-between">
                                        <p className="font-light text-xs text-really-grey mr-4">#{formatId(evolution?.id)}</p>
                                        <div className="flex gap-2">
                                            {evolution?.types.map((type, index) => (
                                                <p key={index}
                                                   className={twMerge('text-xs font-medium text-types-grass capitalize', pokemonElementEvolution(type))}>
                                                    {type}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className="font-medium text-main-blue capitalize">{evolution?.name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

PokemonEvolution.propTypes = {
    pokemonEvolution: PropTypes.object.isRequired,
    pokemonElementEvolution: PropTypes.func.isRequired,
}

export default PokemonEvolution;
