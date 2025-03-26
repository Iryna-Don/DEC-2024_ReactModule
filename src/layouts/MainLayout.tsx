import Menu from "../components/nav_menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;