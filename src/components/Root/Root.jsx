import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#7E90FE0C] to-[#9873FF0D]">
                <div className="max-w-screen-lg mx-auto">
                    <Header></Header>
                    
                </div>
                
            </div>
            <div className=""><Outlet></Outlet></div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;