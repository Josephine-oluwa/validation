import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import HomeScreen from "../pages/Screen/HomeScreen";
import Register from "../pages/Auth/Register";
import SignIn from "../pages/Auth/SignIn";


export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
              index: true,
              element: <HomeScreen/>
            }
        ]
    },
   
    {
        path: "register",
        element: <Register/>
    },
    {
        path: "sign-in",
        element: <SignIn/>
    },
    {
        path: "*",
        element: <Error/>
    },

])