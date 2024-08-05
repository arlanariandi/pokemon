import pokemonBall from "../assets/pokemonball.png";
import back from "../assets/arrow.png"
import {useLocation, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({title}) => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        navigate('/')
    }

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className="relative bg-main-blue h-16 content-center px-6">
                <div className={`flex gap-4 items-center`}>
                    <img src={back} alt="button-back"
                         className={`h-4 w-4 cursor-pointer ${isActive('/favorites') ? 'hidden' : ''}`}
                         onClick={handleClick}/>
                    <p className="font-medium text-light-grey">{title}</p>
                </div>
                <img src={pokemonBall} alt="logo-pokemonball"
                     className="absolute w-20 end-3 -top-5 opacity-50"/>
            </div>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;
