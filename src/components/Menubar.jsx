import {useLocation, useNavigate} from "react-router-dom";

const Menubar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path) => {
        navigate(path)
    }

    const isActive = (path) => location.pathname === path;

    return (
        <div className="fixed bottom-0 z-50 w-full h-16 bg-light-grey max-w-md border-t border-really-grey/30">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                <button type="button" onClick={() => handleNavigate('/')}
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-main-blue group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className={`bi bi-house-fill w-5 h-5 mb-1 group-hover:text-light-grey ${isActive('/') ? 'text-main-blue' : 'text-really-grey'}`}
                         viewBox="0 0 16 16">
                        <path
                            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                    </svg>
                    <span
                        className={`text-xs group-hover:text-light-grey ${isActive('/') ? 'text-main-blue' : 'text-really-grey'}`}>
                        Home
                    </span>
                </button>

                <button type="button" onClick={() => handleNavigate('/favorites')}
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-main-blue group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className={`bi bi-heart-fill w-5 h-5 mb-1 group-hover:text-light-grey ${isActive('/favorites') ? 'text-main-blue' : 'text-really-grey'}`}
                         viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                    <span
                        className={`text-xs group-hover:text-light-grey ${isActive('/favorites') ? 'text-main-blue' : 'text-really-grey'}`}>
                        Favorites
                    </span>
                </button>

                <button type="button" onClick={() => handleNavigate('/profile')}
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-main-blue group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className={`bi bi-person-fill w-5 h-5 mb-1 group-hover:text-light-grey ${isActive('/profile') ? 'text-main-blue' : 'text-really-grey'}`}
                         viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fillRule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                    <span
                        className={`text-xs group-hover:text-light-grey ${isActive('/profile') ? 'text-main-blue' : 'text-really-grey'}`}>
                        Profile
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Menubar;
