import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <div>
                <Navbar></Navbar>
            </div>
            {/* Outlet */}
            <div>
            <Outlet></Outlet>
            </div>
            {/* Footer */}
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;