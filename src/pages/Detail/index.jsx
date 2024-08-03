import {useParams} from "react-router-dom";
import useFetchPokemonDetail from "../../hooks/useFetchPokemonDetail.js";
import Loading from "../../components/Loading.jsx";
import Navbar from "../../components/Navbar.jsx";
import PokemonDetail from "./components/PokemonDetail.jsx";
import PokemonBreeding from "./components/PokemonBreeding.jsx";
import Footer from "../../components/Footer.jsx";
import PokemonAbilities from "./components/PokemonAbilities.jsx";
import PokemonEvolution from "./components/PokemonEvolution.jsx";

const Detail = () => {
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
    const getPokemonElementEvolution = (type) => {
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

    if (isLoading) return <Loading/>

    return (
        <div className="bg-types-dark/10">
            <Navbar/>
            <div className="px-4 my-6">
                <PokemonDetail pokemonDetail={pokemonDetail} pokemonElement={getPokemonElement}/>
                <PokemonBreeding detail={pokemonDetail}/>
                <PokemonAbilities abilitiesDetail={pokemonDetail}/>
                <PokemonEvolution pokemonEvolution={pokemonDetail} pokemonElementEvolution={getPokemonElementEvolution}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Detail;
