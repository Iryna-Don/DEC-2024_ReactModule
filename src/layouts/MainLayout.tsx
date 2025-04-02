import NavMenu from "../components/NavMenu.tsx";
import {Outlet} from "react-router-dom";
const MainLayout = () => {
    return (
        <div>
            <NavMenu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;