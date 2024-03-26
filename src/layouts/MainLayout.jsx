import { Outlet } from "react-router-dom";
import Nav from "../componants/Nav";
import Footer from "../componants/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                 <Outlet></Outlet>
            </div>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;