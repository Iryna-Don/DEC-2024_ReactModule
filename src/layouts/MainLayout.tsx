import {Outlet} from "react-router-dom";
import NavMenu from "../components/nav/NavMenu.tsx";

const MainLayout = () => {

    return (
        <div>
            <p>MainLayout content</p>
            <div>
                <NavMenu/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;