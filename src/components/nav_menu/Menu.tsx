import {Link} from "react-router-dom";
import {FC, useState} from "react";
import s from "./menu.module.css";
import {IOpenMenus} from "../../models/NavMenu/IOpenMenus.ts";
import {IMenuItem} from "../../models/NavMenu/IMenuItem.ts";


const Menu: FC = () => {
    const [openMenus, setOpenMenus] = useState<IOpenMenus>({
        users: false,
        posts: false,
        comments: false
    });

    const toggleMenu = (menu: keyof IOpenMenus, isOpen: boolean) => {
        setOpenMenus(prev => ({...prev, [menu]: isOpen}));
    };

    const submenuNames = ['JSONPlaceholder', 'DummyJSON'];

    const menuItems: IMenuItem[] = ['Users', 'Posts', 'Comments'].map(name => ({
        name,
        path: `/${name.toLowerCase()}`,
        submenu: submenuNames.map(sub => ({
            name: sub,
            path: `/${name.toLowerCase()}/${sub.toLowerCase()}`
        }))
    }));

    return (
        <nav>
            <ul className={s.navUl}>

                <li>
                    <Link to="/">Home</Link>
                </li>

                {menuItems.map(({name, path, submenu}) => {
                    const menuKey = name.toLowerCase() as keyof IOpenMenus;

                    return (
                        <li
                            key={name}
                            className={s.keyLi}
                            onMouseEnter={() => toggleMenu(menuKey, true)}
                            onMouseLeave={() => toggleMenu(menuKey, false)}
                        >
                            <Link to={path}>{name}</Link>
                            <ul className={`${s.submenu} ${openMenus[menuKey] ? s.show : ''}`}>
                                {submenu.map(({name, path}) => (
                                    <li key={name}>
                                        <Link to={path}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Menu;
