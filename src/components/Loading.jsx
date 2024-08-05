const Loading = () => {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center h-full w-full z-50">
            <div className="flex items-center justify-center h-screen w-full max-w-md bg-types-dark/90 opacity-70"></div>
            <div className="font-medium text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="loader"></span>
            </div>
        </div>
    )
}

export default Loading;
