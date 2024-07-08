import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import setupRouter from "./router/router.jsx";
import {RouterProvider} from "react-router-dom";
import {PokemonProvider} from "./context/PokemonContext.jsx";

const router = setupRouter();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PokemonProvider>
            <RouterProvider router={router}/>
        </PokemonProvider>
    </React.StrictMode>,
)
