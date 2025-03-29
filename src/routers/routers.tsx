import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import HomePage from "../pages/HomePage.tsx";

export const routers = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: '/users', element: <UsersPage/>}
        ]
    },
])