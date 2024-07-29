import PropTypes from "prop-types";

const PokemonAbilities = ({abilitiesDetail}) => {
    return (
        <div className="bg-light-grey p-6 rounded-md mb-6">
            <h2 className="mb-2.5">Abilities</h2>
            <div className="flex justify-between gap-4">
                {abilitiesDetail?.abilities.map((ability, index) => (
                    <div key={index}
                         className={`w-full h-24 rounded-lg flex flex-col justify-center items-center ${index === 0 ? "bg-bright-yellow" : "bg-orange"}`}>
                        <div className="h-10 w-10 bg-light-grey rounded-full flex justify-center items-center">
                            <p className={`uppercase text-lg text-center ${index === 0 ? "text-bright-yellow" : "text-orange"}`}>{ability.charAt(0)}</p>
                        </div>
                        <p className={`text-center mt-2 text-sm capitalize ${index === 0 ? 'text-really-grey' : 'text-light-grey'}`}>{ability}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

PokemonAbilities.propTypes = {
    abilitiesDetail: PropTypes.object.isRequired,
}

export default PokemonAbilities;
