import PropTypes from "prop-types";
import {twMerge} from "tailwind-merge";
import {useNavigate} from "react-router-dom";

const PokemonCard = ({pokemon, lastPokemonElementRef}) => {
    const navigate = useNavigate();

    const getPokemonElement = (type) => {
        switch (type) {
            case 'bug':
                return 'bg-types-bug';
            case'grass':
                return 'bg-types-grass';
            case 'dragon':
                return 'bg-types-dragon';
            case 'steal':
                return 'bg-types-steal';
            case 'dark':
                return 'bg-types-dark';
            case 'flying':
                return 'bg-types-flying';
            case 'normal':
                return 'bg-types-normal';
            case 'ghost':
                return 'bg-types-ghost';
            case 'rock':
                return 'bg-types-rock';
            case 'ground':
                return 'bg-types-ground';
            case 'fighting':
                return 'bg-types-fighting';
            case 'fire':
                return 'bg-types-fire';
            case 'electric':
                return 'bg-types-electric';
            case 'poison':
                return 'bg-types-poison';
            case 'psychic':
                return 'bg-types-psychic';
            case 'fairy':
                return 'bg-types-fairy';
            case 'water':
                return 'bg-types-water';
            case 'ice':
                return 'bg-types-ice';
            default:
                return 'bg-types-normal';
        }
    }

    const handleClick = () => {
        navigate(`pokedex/${pokemon.name}`);
    }

    return (
        <div
            className="h-52 w-full rounded-md mb-3.5 p-3.5 flex flex-col justify-between shadow-md bg-light-grey cursor-pointer hover:bg-types-dark/10"
            ref={lastPokemonElementRef}
            onClick={handleClick}
        >
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-sm text-main-blue capitalize">{pokemon.name}</h2>
                <p className="font-light text-xs text-really-grey">#{pokemon.id}</p>
            </div>
            <div className="flex h-28 justify-center items-center">
                <img src={pokemon.image} alt={pokemon.name} className="h-full object-contain"/>
            </div>
            <div className="flex justify-between items-center gap-2">
                {pokemon.types.map((type, index) => (
                    <p key={index}
                       className={twMerge('text-xs bg-types-grass rounded-sm w-full text-center px-2 py-1 text-light-grey capitalize', getPokemonElement(type))}>
                        {type}
                    </p>
                ))}
            </div>
        </div>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
    lastPokemonElementRef: PropTypes.func
}

export default PokemonCard;
