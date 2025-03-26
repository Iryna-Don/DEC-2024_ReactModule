import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            UsersPage content
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;