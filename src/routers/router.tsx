import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/users/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";
import AllUsersDummyjson from "../pages/users/AllUsersDummyjson.tsx";
import AllUsersJsonplaceholder from "../pages/users/AllUsersJsonplaceholder.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children:
            [
                {index: true, element: <HomePage/>},
                {path: '/users', element: <UsersPage/>, children:[
                        {path:'jsonplaceholder', element: <AllUsersJsonplaceholder/>},
                        {path:'dummyjson', element: <AllUsersDummyjson/>},
                    ]},
                {path: '/posts', element: <PostsPage/>},
                {path: '/comments', element: <CommentsPage/>},
                {path: '/products', element: <ProductsPage/>},
            ]
    }

])
