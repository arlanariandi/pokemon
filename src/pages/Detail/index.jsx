import {useNavigate, useParams} from "react-router-dom";
import useFetchPokemonDetail from "../../hooks/useFetchPokemonDetail.js";
import {twMerge} from "tailwind-merge";
import pokemonBall from "../../assets/pokemonball.png";
import Loading from "../../components/Loading.jsx";

const PokemonDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {pokemonDetail, isLoading} = useFetchPokemonDetail(id);

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
        navigate('/')
    }

    return (
        <div className="bg-types-dark/10 px-4">
            <div className="relative bg-main-blue h-14 content-center px-4">
                <p className="text-light-grey cursor-pointer" onClick={handleClick}>back</p>
                <img src={pokemonBall} alt="logo-pokemonball"
                     className="absolute w-14 md:w-16 end-3 md:end-4 -top-2 md:-top-3 opacity-30"/>
            </div>

            <div className="bg-light-grey mt-4 p-4 rounded-md">
                <div className="flex justify-between">
                    <div className="w-full">
                        <p className="font-light text-md text-really-grey">#{pokemonDetail?.id}</p>
                        <h3 className="font-medium text-xl text-main-blue capitalize">{pokemonDetail?.name}</h3>
                    </div>

                    <div className="flex justify-between items-center gap-2 w-full">
                        {pokemonDetail?.types.map((type, index) => (
                            <p key={index}
                               className={twMerge('text-sm bg-types-grass rounded-md w-full text-center px-2 py-1 text-light-grey capitalize', getPokemonElement(type))}>
                                {type}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between mt-5 gap-1 items-center">
                    <div className="w-full">
                        {pokemonDetail?.stats.map((stat, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-end">
                                    <p className={`${stat.stat === 'hp' ? 'uppercase' : 'capitalize'} text-sm`}>{stat.stat.replace('-', ' ')}</p>
                                    <p className="text-xs">{stat.value}</p>
                                </div>
                                <div
                                    className='w-full bg-main-blue/25 rounded-full h-1.5 overflow-hidden mb-1.5'>
                                    <div className="bg-main-blue/70 h-full rounded-full"
                                         style={{width: `${stat.value / 2}%`}}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img src={pokemonDetail?.image} alt={pokemonDetail?.name} className="h-44 object-contain"/>
                </div>
            </div>

            <div className="mt-4">
                <h2>Breeding</h2>
            </div>

            <div className="mt-4">
                <h2>Abilities</h2>
            </div>

            {isLoading && <Loading/>}
        </div>
    )
}

export default PokemonDetail;
