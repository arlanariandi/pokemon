import {twMerge} from "tailwind-merge";
import PropTypes from "prop-types";

const PokemonDetail = ({pokemonDetail, pokemonElement}) => {
    const formatId = id => id.toString().padStart(4, '0');

    return (
        <div className="bg-light-grey p-6 rounded-md mb-6">
            <div className="flex justify-between">
                <div className="w-full">
                    <p className="font-light text-md text-really-grey">#{formatId(pokemonDetail?.id)}</p>
                    <h3 className="font-medium text-xl text-main-blue capitalize">{pokemonDetail?.name}</h3>
                </div>

                <div className="flex justify-between items-center gap-2 w-full">
                    {pokemonDetail?.types.map((type, index) => (
                        <p key={index}
                           className={twMerge('text-sm bg-types-grass rounded-md w-full text-center px-2 py-1 text-light-grey capitalize', pokemonElement(type))}>
                            {type}
                        </p>
                    ))}
                </div>
            </div>

            <div className="flex justify-between my-5 gap-5 items-center">
                <div className="w-full">
                    {pokemonDetail?.stats.map((stat, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-end">
                                <p className={`${stat.stat === 'hp' ? 'uppercase' : 'capitalize'} text-sm`}>{stat.stat.replace('-', ' ')}</p>
                                <p className="text-xs">{stat.value}</p>
                            </div>
                            <div
                                className='w-full bg-types-fairy/25 rounded-full h-1.5 overflow-hidden mb-1.5'>
                                <div className="bg-types-fairy/70 h-full rounded-full"
                                     style={{width: `${stat.value / 2}%`}}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <img src={pokemonDetail?.image} alt={pokemonDetail?.name} className="h-44 object-contain"/>
            </div>
        </div>
    )
}

PokemonDetail.propTypes = {
    pokemonDetail: PropTypes.object.isRequired,
    pokemonElement: PropTypes.object.isRequired,
}

export default PokemonDetail
