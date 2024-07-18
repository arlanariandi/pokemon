import PropTypes from "prop-types";

const PokemonBreeding = ({detail}) => {
    return (
        <div className="bg-light-grey p-6 rounded-md mb-4">
            <h2 className="mb-2.5">Breeding</h2>
            <div className="flex justify-between gap-4">
                <div className="w-full text-center">
                    <p className="mb-1.5 text-sm text-really-grey font-medium">Height</p>
                    <p className="border border-really-grey/50 rounded-md py-2 text-sm font-medium text-really-grey">{detail?.height / 10} m</p>
                </div>
                <div className="w-full text-center">
                    <p className="mb-1.5 text-sm text-really-grey font-medium">Weight</p>
                    <p className="border border-really-grey/50 rounded-md py-2 text-sm font-medium text-really-grey">{detail?.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}

PokemonBreeding.propTypes = {
    detail: PropTypes.object.isRequired,
}

export default PokemonBreeding;
