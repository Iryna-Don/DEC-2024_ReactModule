import {Outlet} from "react-router-dom";
import Menu from "../components/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;