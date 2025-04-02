import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import CreateCar from "../components/car/CreateCar.tsx";
import DeleteCar from "../components/car/DeleteCar.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children:
            [
                {index: true, element: <HomePage/>},
                {path: "cars", element: <CarsPage/>},
                {path: "cars/create", element: <CreateCar/>},
                {path: "cars/delete", element: <DeleteCar/>},
            ]
    }
])