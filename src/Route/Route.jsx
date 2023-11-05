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
                element: <AllFood></AllFood>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
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