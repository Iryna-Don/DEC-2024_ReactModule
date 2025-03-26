export interface IMenuItem {
    name: string;
    path: string;
    submenu: ISubmenuItem[];
}

export interface ISubmenuItem {
    name: string;
    path: string;
}

