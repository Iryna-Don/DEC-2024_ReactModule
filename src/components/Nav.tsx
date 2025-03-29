import { Link } from "react-router-dom";
import s from "./nav.module.css";
import "../index.css";

const Nav = () => {
    return (
        <div>
            <ul className="container">
                <li>
                    <Link className={s.btn} to="/">Home</Link>
                </li>
                <li>
                    <Link className={s.btn} to="/users">Users</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;