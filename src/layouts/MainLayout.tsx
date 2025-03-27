import {Outlet} from "react-router-dom";
import Menu from "../components/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            MainLayout content
            <div className="wrapper">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;