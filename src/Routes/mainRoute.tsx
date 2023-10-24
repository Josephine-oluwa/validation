import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import Register from "../pages/Auth/Register";
import SignIn from "../pages/Auth/SignIn";
import PrivateRoute from "./PrivateRoute";
import HomeScreen from "../pages/Screen/HomeScreen";
import UpdateScreen from "../pages/Screen/updateScreen";


export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: (
            <PrivateRoute>
                <Layout/>
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
       
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/detail",
        element: <UpdateScreen/>
    },
    {
        path: "/sign-in",
        element: <SignIn/>
    },
    
    {
        path: "*",
        element: <Error/>
    },

])