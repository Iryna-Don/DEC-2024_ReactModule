import {Link} from "react-router-dom";

const NavMenu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;