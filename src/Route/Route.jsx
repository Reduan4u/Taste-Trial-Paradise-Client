import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/Root/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import SignUp from "../Components/Authentication/SignUp";
import AboutUs from "../Components/Pages/Contact/Contact";
import AllFood from "../Components/Pages/AllFood/AllFood";
import Blog from "../Components/Pages/Blog/Blog";
import LogIn from "../Components/Authentication/LogIn";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddFoods from "../Components/Pages/AddFoods/AddFoods";
import SingleFood from "../Components/Pages/SingleFood/SingleFood";
import FoodPurchase from "../Components/Pages/FoodPurchase/FoodPurchase";
import UserAddedFoods from "../Components/Pages/userAddedFoods/userAddedFoods";
import UserOrderedFoods from "../Components/Pages/UserOrderedFoods/UserOrderedFoods";
import UpdateFood from "../Components/Pages/UpdateFood/UpdateFood";
import Contact from "../Components/Pages/Contact/Contact";

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
                path: '/allFood',
                element: <AllFood></AllFood>,
                loader: () => fetch("https://taste-trial-paradise-server.vercel.app/foodsCount")
            },
            {
                path: '/:category/:name/:_id',
                element: <SingleFood></SingleFood>,
                loader: () => fetch("https://taste-trial-paradise-server.vercel.app/foods")
            },
            {
                path: '/:name/:_id',
                element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
                loader: () => fetch("https://taste-trial-paradise-server.vercel.app/foods")
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFoods></AddFoods></PrivateRoute>,
            },
            {
                path: '/myAddedFoods',
                element: <PrivateRoute><UserAddedFoods></UserAddedFoods></PrivateRoute>,
                loader: () => fetch("https://taste-trial-paradise-server.vercel.app/foods")
            },
            {
                path: '/:name/:id/update',
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://taste-trial-paradise-server.vercel.app/foods/${params.id}`)
            },
            {
                path: '/myOrderedFoods',
                element: <PrivateRoute><UserOrderedFoods></UserOrderedFoods></PrivateRoute>,
                loader: () => fetch("https://taste-trial-paradise-server.vercel.app/orderedFoods", { credentials: "include" })
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
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