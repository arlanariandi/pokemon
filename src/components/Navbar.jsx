import pokemonBall from "../assets/pokemonball.png";
import back from "../assets/arrow.png"
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return (
        <>
            <div className="relative bg-main-blue h-14 content-center px-4">
                <img src={back} alt="button-back" className="w-5 cursor-pointer" onClick={handleClick}/>
                <img src={pokemonBall} alt="logo-pokemonball"
                     className="absolute w-14 md:w-16 end-3 md:end-4 -top-2 md:-top-3 opacity-30"/>
            </div>
        </>
    )
}

export default Navbar;
