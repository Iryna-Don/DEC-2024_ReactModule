import Users from "../components/users/Users.tsx";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <>
            <p>UsersPage content</p>
            <Outlet/>
            <Users/>
        </>
    )
};

export default UsersPage;