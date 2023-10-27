import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
<<<<<<< HEAD
import HomeScreen from "../pages/Screen/HomeScreen";
import Register from "../pages/Auth/Register";
import SignIn from "../pages/Auth/SignIn";
=======
import Register from "../pages/Auth/Register";
import SignIn from "../pages/Auth/SignIn";
import PrivateRoute from "./PrivateRoute";
import HomeScreen from "../pages/Screen/HomeScreen";
import UpdateScreen from "../pages/Screen/updateScreen";
>>>>>>> 2552d41d8c95f7a645249232eb995e9f161449d9


export const mainRoute = createBrowserRouter ([
    {
        path: "/",
<<<<<<< HEAD
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
=======
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
       
>>>>>>> 2552d41d8c95f7a645249232eb995e9f161449d9
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