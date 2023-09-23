import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)
    return (
        <div className="flex items-center flex-col justify-center mt-56">
            <h1 className="text-5xl text-red-600 font-bold">Oops !!</h1>
            <p className="text-3xl font-bold">Sorry, an unexpected error has occurred.</p>
            <p className="text-3xl font-extrabold">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/"><button className=" mt-5 font-bold text-white btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;