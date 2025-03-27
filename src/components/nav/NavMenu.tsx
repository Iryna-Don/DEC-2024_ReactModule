import {Link} from "react-router-dom";
import s from "./navMenu.module.css";

const NavMenu = () => {
    return (
        <div>
            <ul>
                <li className={s.navLi}>
                    <Link to="/">Home</Link>
                </li>
                <li className={s.navLi}>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;