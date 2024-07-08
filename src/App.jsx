import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className="min-h-screen flex justify-center bg-[#f3f4f6]">
            <div className="bg-[#ffffff] w-full max-w-md">
                <Outlet/>
            </div>
        </div>
    )
}

export default App
