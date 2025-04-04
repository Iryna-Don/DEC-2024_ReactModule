import {Outlet} from "react-router-dom";
import NavMenu from "../components/NavMenu.tsx";

const MainLayout = () => {
    return (
        <div>
            <NavMenu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;