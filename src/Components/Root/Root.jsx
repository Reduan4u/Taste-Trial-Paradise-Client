import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="pt-8" style={{ backgroundColor: 'rgba(254,245,238,255)' }}>   <Navbar></Navbar> </div>
            <div className="" style={{ backgroundColor: 'rgba(254,245,238,255)' }}>
                <Outlet></Outlet>
            </div>
            <div style={{ backgroundColor: 'rgba(254,245,238,255)' }}>  <Footer></Footer> </div>
        </div>
    );
};

export default Root;