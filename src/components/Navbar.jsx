import pokemonBall from "../assets/pokemonball.png";
import back from "../assets/arrow.png"
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <div className="relative bg-main-blue h-16 content-center px-6">
                <img src={back} alt="button-back" className="w-5 cursor-pointer" onClick={handleClick}/>
                <img src={pokemonBall} alt="logo-pokemonball"
                     className="absolute w-20 end-3 -top-5 opacity-50"/>
            </div>
        </>
    )
}

export default Navbar;
