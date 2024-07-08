import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home/index.jsx";

const setupRouter = () => createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
])


export default setupRouter;
