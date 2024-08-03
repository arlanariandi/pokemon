import PropTypes from "prop-types";
import {twMerge} from "tailwind-merge";
import {useNavigate} from "react-router-dom";
import heart from '../../../assets/heart.png';
import heartFit from '../../../assets/heart-fitt.png';
import {useContext} from "react";
import {PokemonContext} from "../../../context/PokemonContext.jsx";

const PokemonCard = ({pokemon, lastPokemonElementRef}) => {
    const navigate = useNavigate();
    const {favorites, addFavorite, removeFavorite} = useContext(PokemonContext);

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

    const handleClick = (name) => {
        navigate(`/pokedex/${name}`);
    }

    const formatId = id => id.toString().padStart(4, '0');

    const isFavorite = favorites.some(fav => fav.id === pokemon.id);

    const handleFavorite = (e) => {
        e.stopPropagation();
        if (isFavorite) {
            removeFavorite(pokemon);
        } else {
            addFavorite(pokemon);
        }
    }

    return (
        <div
            className="h-52 w-full rounded-md mb-3.5 p-3.5 flex flex-col justify-between shadow-md bg-light-grey cursor-pointer hover:bg-types-dark/10"
            ref={lastPokemonElementRef}
            onClick={() => handleClick(pokemon.name)}
        >
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-sm text-main-blue capitalize">{pokemon.name}</h2>
                <div className="flex gap-1 items-center">
                    <p className="font-light text-xs text-really-grey">#{formatId(pokemon.id)}</p>
                    {isFavorite ?
                        <img src={heartFit} alt="heartfit" className="w-6 cursor-pointer" onClick={handleFavorite}/>
                        :
                        <img src={heart} alt="heart" className="w-6 cursor-pointer" onClick={handleFavorite}/>
                    }
                </div>
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
