import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";

 export const routers = createBrowserRouter([{
    path: "/", element: <MainLayout/>, children: [
        {
            index:true, element:<HomePage/>
        },
        {
            path: "movies", element:<MoviesPage/>
        },

    ]
}])