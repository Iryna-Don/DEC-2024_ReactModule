import {createBrowserRouter} from "react-router-dom";
import PostsPage from "../pages/PostsPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const routers = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: '/users', element: <UsersPage/>},
            {path: '/posts', element: <PostsPage/>},
        ]
    },
])
