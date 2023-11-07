import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/Root/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import SignUp from "../Components/Authentication/SignUp";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import AllFood from "../Components/Pages/AllFood/AllFood";
import Blog from "../Components/Pages/Blog/Blog";
import LogIn from "../Components/Authentication/LogIn";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddFoods from "../Components/Pages/AddFoods/AddFoods";
import SingleFood from "../Components/Pages/SingleFood/SingleFood";
import FoodPurchase from "../Components/Pages/FoodPurchase/FoodPurchase";
import UserAddedFoods from "../Components/Pages/userAddedFoods/userAddedFoods";
import UserOrderedFoods from "../Components/Pages/UserOrderedFoods/UserOrderedFoods";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>,
            },
            {
                path: '/allFood',
                element: <AllFood></AllFood>,
                loader: () => fetch("http://localhost:5000/foods")
            },
            {
                path: '/:category/:name/:_id',
                element: <SingleFood></SingleFood>,
                loader: () => fetch("http://localhost:5000/foods")
            },
            {
                path: '/:name/:_id',
                element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/foods")
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFoods></AddFoods></PrivateRoute>,
            },
            {
                path: '/myAddedFoods',
                element: <PrivateRoute><UserAddedFoods></UserAddedFoods></PrivateRoute>,
            },
            {
                path: '/myOrderedFoods',
                element: <PrivateRoute><UserOrderedFoods></UserOrderedFoods></PrivateRoute>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },


        ]
    },
]);

export default Route;