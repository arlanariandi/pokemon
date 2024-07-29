import arrow from '../../../assets/arrow-down.png'
import PropTypes from "prop-types";
import {twMerge} from "tailwind-merge";

const PokemonEvolution = ({pokemonEvolution}) => {
    const getPokemonElement = (type) => {
        switch (type) {
            case 'bug':
                return 'text-types-bug';
            case'grass':
                return 'text-types-grass';
            case 'dragon':
                return 'text-types-dragon';
            case 'steal':
                return 'text-types-steal';
            case 'dark':
                return 'text-types-dark';
            case 'flying':
                return 'text-types-flying';
            case 'normal':
                return 'text-types-normal';
            case 'ghost':
                return 'text-types-ghost';
            case 'rock':
                return 'text-types-rock';
            case 'ground':
                return 'text-types-ground';
            case 'fighting':
                return 'text-types-fighting';
            case 'fire':
                return 'text-types-fire';
            case 'electric':
                return 'text-types-electric';
            case 'poison':
                return 'text-types-poison';
            case 'psychic':
                return 'text-types-psychic';
            case 'fairy':
                return 'text-types-fairy';
            case 'water':
                return 'text-types-water';
            case 'ice':
                return 'text-types-ice';
            default:
                return 'text-types-normal';
        }
    }
    const formatId = id => id.toString().padStart(4, '0');

    return (
        <div className="bg-light-grey p-6 rounded-md mb-6">
            <h2 className="mb-4">Evolutions</h2>

            {pokemonEvolution?.evolutions.map((evolution, index) => (
                <div key={index} className="flex flex-col items-center mb-4">
                    <img src={arrow} alt="arrow down" className={`w-4 mb-4 ${index === 0 ? 'hidden' : ''}`}/>

                    <div className="w-full px-14 py-2 rounded-md hover:bg-really-grey/10">
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
                                                   className={twMerge('text-xs font-medium text-types-grass capitalize', getPokemonElement(type))}>
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
}

export default PokemonEvolution;
