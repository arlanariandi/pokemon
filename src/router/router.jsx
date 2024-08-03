import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home/index.jsx";
import Detail from "../pages/Detail/index.jsx";
import Favorite from "../pages/Favorite/index.jsx";

const setupRouter = () => createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/pokedex/:id",
                element: <Detail/>
            },
            {
                path: "/favorites",
                element: <Favorite/>
            }
        ]
    }
])


export default setupRouter;
