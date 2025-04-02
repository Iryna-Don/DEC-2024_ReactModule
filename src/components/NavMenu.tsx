import {Link} from "react-router-dom";
const NavMenu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/cars'>Cars</Link>
                </li>
                <li>
                    <Link to='/cars/create'>Create New Car</Link>
                </li>
                <li>
                    <Link to='/cars/delete'>Delete Car By ID</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;