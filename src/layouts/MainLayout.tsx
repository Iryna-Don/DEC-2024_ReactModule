import {Outlet} from "react-router-dom";
import Nav from "../components/Nav.tsx";

const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;