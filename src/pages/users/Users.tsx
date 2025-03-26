import {Link, Outlet} from "react-router-dom";

const Users = () => {
    return (
        <div>
            Users
            <ul>
                <li><Link to={'jsonplaceholder'}>Get Users From Jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Get Users From Dummyjson</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Users;